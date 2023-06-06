import pages from "@/pages";
import React from "react";

export interface Route {
  path: string;
  name: string;
  children?: Route[];
  component?: React.ComponentType<any>;
}

const routes: Route[] = [
  {
    path: "/react",
    name: "react",
    children: [
      {
        path: "/context",
        name: "Context",
        component: pages.react.Context,
      },
      {
        path: "/refProps",
        name: "RefProps",
        component: pages.react.RefProps,
      },
    ],
  },
  {
    path: "/router",
    name: "router",
    children: [
      {
        path: "/prompt",
        name: "Prompt",
        component: pages.router.Prompt,
      },
    ],
  },
  {
    path: "/lib",
    name: "lib",
    children: [
      {
        path: "/crypto",
        name: "Crypto",
        component: pages.lib.Crypto,
      },
      {
        path: "/html2canvas",
        name: "Html2canvas",
        component: pages.lib.Html2Canvas,
      },
      {
        path: "/html2word",
        name: "Html2Word",
        component: pages.lib.HtmlToWord,
      },
      {
        path: "/g6",
        name: "G6",
        component: pages.lib.G6,
      },
      {
        path: "/tinymce",
        name: "Tinymce",
        component: pages.lib.Tinymce,
      },
      {
        path: "/ckeditor",
        name: "CKEditor",
        component: pages.lib.CKEditor
      }
    ],
  },
  {
    path: "/source",
    name: "source",
    children: [
      {
        path: "/formPage",
        name: "FormPage",
        component: pages.source.FormPage,
      },
    ],
  },
  {
    path: "other",
    name: "other",
    children: [
      {
        path: "/drag",
        name: "Drag",
        component: pages.other.Drag,
      },
      {
        path: "/selectedTable",
        name: "SelectedTable",
        component: pages.other.SelectedTable,
      },
      {
        path: "/tableRow",
        name: "TableRow",
        component: pages.other.TableRow,
      },
      {
        path: "/selectedTableAntd",
        name: "SelectedTableAntd",
        component: pages.other.SelectedTableAntd,
      },
      {
        path: "/lazyScroll",
        name: "LazyScroll",
        component: pages.other.LazyScroll,
      },
    ],
  },
];
export default routes;
