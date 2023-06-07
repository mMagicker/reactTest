// external-data-widget/externaldatawidget.js

import { Plugin } from '@ckeditor/ckeditor5-core';
import './externaldatawidget.css'

import ExternalDataWidgetEditing from './externaldatawidgetediting';
import ExternalDataWidgetUI from './externaldatawidgetui';

export default class ExternalDataWidget extends Plugin {
    static get requires() {
        return [ ExternalDataWidgetEditing, ExternalDataWidgetUI ];
    }
}
