// external-data-widget/externaldatawidgetcommand.js

import { Command } from "@ckeditor/ckeditor5-core";

// example external data source url
const RESOURCE_URL = "https://api2.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT";

class ExternalDataWidgetCommand extends Command {
  execute() {
    const editor = this.editor;
    const selection = editor.model.document.selection;

    editor.model.change((writer) => {
      // Create an <externalElement> element with the "data-resource-url" attribute
      // (and all the selection attributes)...
      const externalWidget = writer.createElement("externalElement", {
        ...Object.fromEntries(selection.getAttributes()),
        "data-resource-url": RESOURCE_URL,
      });

      // ... insert it into the document and put the selection on the inserted element.
      editor.model.insertObject(externalWidget, null, null, {
        setSelection: "on",
      });
    });
  }

  refresh() {
    const model = this.editor.model;
    const selection = model.document.selection;

    const isAllowed = model.schema.checkChild(selection.focus.parent, "externalElement");

    this.isEnabled = isAllowed;
  }
}

export default ExternalDataWidgetCommand;