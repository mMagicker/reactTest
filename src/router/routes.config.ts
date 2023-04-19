import pages from '@/pages'
import React from 'react'

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
        component: pages.react.Context
      },
    ]
  },
  {
    path: "/router",
    name: "router",
    children: [
      {
        path: "/prompt",
        name: "Prompt",
        component: pages.router.Prompt
      }
    ]
  },
  {
    path: "/lib",
    name: "lib",
    children: [
      {
        path: "/crypto",
        name: "Crypto",
        component: pages.lib.Crypto
      }
    ]
  },
  {
    path: "/source",
    name: "source",
    children: [
      {
        path: "/formPage",
        name: "FormPage",
        component: pages.source.FormPage
      }
    ]
  },
  {
    path: 'other',
    name: 'other',
    children: [
      {
        path: "/drag",
        name: "Drag",
        component: pages.other.Drag
      },
      {
        path: "/selectedTable",
        name: "SelectedTable",
        component: pages.other.SelectedTable
      },
      {
        path: "/tableRow",
        name: "TableRow",
        component: pages.other.TableRow
      },
      {
        path: "/selectedTableAntd",
        name: "SelectedTableAntd",
        component: pages.other.SelectedTableAntd
      }
    ]
  }
]
export default routes;