import { Plugin } from "@ckeditor/ckeditor5-core";
import TestPluginCommand from "./test-plugin-command";

export default class TestPlugin extends Plugin {
  init() {
    const editor = this.editor;

    editor.commands.add("testCommand", new TestPluginCommand(editor));
  }
  refresh() {
    console.log("refresh");
  }
}
