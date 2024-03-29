// placeholder/placeholderediting.js

import { Widget, toWidget } from "@ckeditor/ckeditor5-widget";
import { Plugin } from "@ckeditor/ckeditor5-core";

import PlaceholderCommand from "./placeholdercommand";

export default class PlaceholderEditing extends Plugin {
  // 依赖
  static get requires() {
    return [Widget];
  }

  // 初始化
  init() {
    console.log("PlaceholderEditing#init() got called");

    this._defineSchema();
    this._defineConverters(); // ADDED
    this.editor.commands.add("placeholder", new PlaceholderCommand(this.editor));
  }

  _defineSchema() {
    // ADDED
    const schema = this.editor.model.schema;

    schema.register("placeholder", {
      // Behaves like a self-contained inline object (e.g. an inline image)
      // allowed in places where $text is allowed (e.g. in paragraphs).
      // The inline widget can have the same attributes as text (for example linkHref, bold).
      inheritAllFrom: "$inlineObject",

      // The placeholder can have many types, like date, name, surname, etc:
      allowAttributes: ["name"],
    });
  }

  _defineConverters() {
    // ADDED
    const conversion = this.editor.conversion;

    conversion.for("upcast").elementToElement({
      view: {
        name: "span",
        classes: ["placeholder"],
      },
      model: (viewElement, { writer: modelWriter }) => {
        // Extract the "name" from "{name}".
        const name = viewElement.getChild(0).data.slice(1, -1);

        return modelWriter.createElement("placeholder", { name });
      },
    });

    conversion.for("editingDowncast").elementToElement({
      model: "placeholder",
      view: (modelItem, { writer: viewWriter }) => {
        const widgetElement = createPlaceholderView(modelItem, viewWriter);

        // Enable widget handling on a placeholder element inside the editing view.
        return toWidget(widgetElement, viewWriter);
      },
    });

    conversion.for("dataDowncast").elementToElement({
      model: "placeholder",
      view: (modelItem, { writer: viewWriter }) => createPlaceholderView(modelItem, viewWriter),
    });

    // Helper method for both downcast converters.
    function createPlaceholderView(modelItem, viewWriter) {
      const name = modelItem.getAttribute("name");

      const placeholderView = viewWriter.createContainerElement("span", {
        class: "placeholder",
      });

      // Insert the placeholder name (as a text).
      const innerText = viewWriter.createText("{" + name + "}");
      viewWriter.insert(viewWriter.createPositionAt(placeholderView, 0), innerText);

      return placeholderView;
    }
  }
}
