// external-data-widget/externaldatawidgetediting.js

import { Plugin } from "@ckeditor/ckeditor5-core";
import { Widget, toWidget } from "@ckeditor/ckeditor5-widget";
import ExternalDataWidgetCommand from "./externaldatawidgetcommand";

const RESOURCE_URL = "https://api2.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT";

export default class ExternalDataWidgetEditing extends Plugin {
  constructor(editor) {
    // The default constructor calls the parent constructor
    super(editor);
    // Property that keep the interval id
    this.intervalId = this._intervalFetch();
    // Last fetched value
    this.externalDataValue = "";
  }

  static get requires() {
    // ADDED
    return [Widget];
  }

  destroy() {
    clearInterval(this.intervalId);
  }

  init() {
    this._defineSchema();
    this._defineConverters();

    this._updateWidgetData();

    this.editor.commands.add("external", new ExternalDataWidgetCommand(this.editor));
  }

  _intervalFetch() {
    return setInterval(() => this._updateWidgetData(), 10000); // set time interval to 10s
  }

  // Fetch data and update all widget instances
  async _updateWidgetData(externalUrl = RESOURCE_URL) {
    try {
      const response = await fetch(externalUrl);
      const data = await response.json();
      const updateTime = new Date(data.closeTime);

      // Example parsed data: $17098.35 - 09/11/2022, 18:04:18
      const parsedData =
        "$" + Number(data.lastPrice).toFixed(2) + " - " + updateTime.toLocaleString();

      // Update property with last fetched and parsed data
      this.externalDataValue = parsedData;

      const rootElement = this.editor.model.document.getRoot();

      // Iterate over whole editor content, search for external data widget instances
      // and trigger `recovertItem` function
      for (const { item } of this.editor.model.createRangeIn(rootElement)) {
        if (item.is("element", "externalElement")) {
          this.editor.editing.reconvertItem(item);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  _defineSchema() {
    const schema = this.editor.model.schema;

    schema.register("externalElement", {
      // Inheriting all from the generic item
      inheritAllFrom: "$inlineObject",

      // The external data widget can have many attributes
      allowAttributes: ["data-resource-url"],
    });
  }
  _defineConverters() {
    const editor = this.editor;

    editor.conversion.for("upcast").elementToElement({
      view: {
        name: "span",
        attributes: ["data-resource-url"],
      },
      model: (viewElement, { writer }) => {
        const externalUrl = viewElement.getAttribute("data-resource-url");

        return writer.createElement("externalElement", {
          "data-resource-url": externalUrl,
        });
      },
    });

    editor.conversion.for("dataDowncast").elementToElement({
      model: "externalElement",
      view: (modelElement, { writer }) => {
        return writer.createEmptyElement("span", {
          "data-resource-url": modelElement.getAttribute("data-resource-url"),
        });
      },
    });

    editor.conversion.for("editingDowncast").elementToElement({
      model: "externalElement",
      view: (modelElement, { writer }) => {
        const externalValueToShow = this.externalDataValue;

        const externalDataPreviewElement = writer.createRawElement(
          "span",
          null,
          function (domElement) {
            // CSS class responsible for the appearance of the widget
            domElement.classList.add("external-data-widget");
            // When the value is not present (initial run) show a placeholder
            domElement.textContent = externalValueToShow || "Fetching data...";

            // If a new value arrives, add a CSS animation effect to show that data were updated
            if (externalValueToShow) {
              domElement.classList.add("external-data-widget-bounce");
              // Remove the animation class when it ends
              setTimeout(() => domElement.classList.remove("external-data-widget-bounce"), 1100);
            }
          }
        );

        const externalWidgetContainer = writer.createContainerElement(
          "span",
          null,
          externalDataPreviewElement
        );

        return toWidget(externalWidgetContainer, writer, {
          label: "External widget",
        });
      },
    });
  }
}
