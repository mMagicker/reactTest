import { Command } from "@ckeditor/ckeditor5-core";

export default class TestPluginCommand extends Command {
  execute(message: string) {
    console.log(message);
  }
  // refresh() {
  //   console.log("refresh");
  // }
}
