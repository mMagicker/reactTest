// placeholder/placeholder.js

import { Plugin } from "@ckeditor/ckeditor5-core";
import './placeholder.css'

import PlaceholderEditing from "./placeholderediting";
import PlaceholderUI from "./placeholderui";

export default class Placeholder extends Plugin {
  // 插件依赖
  static get requires() {
    return [PlaceholderEditing, PlaceholderUI];
  }
}
