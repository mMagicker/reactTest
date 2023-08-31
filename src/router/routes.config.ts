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
		path: "react",
		name: "react",
		children: [
			{
				path: "context",
				name: "Context",
				component: pages.react.Context,
			},
			{
				path: "refProps",
				name: "RefProps",
				component: pages.react.RefProps,
			},
			{
				path: "useCallback",
				name: "useCallback",
				component: pages.react.UseCallback,
			},
			{
				path: "forwardRef",
				name: "ForwardRef",
				component: pages.react.ForwardRef,
			},
		],
	},
	// {
	// 	path: "/router5",
	// 	name: "router5",
	// 	children: [
	// 		{
	// 			path: "/prompt",
	// 			name: "Prompt",
	// 			component: pages.router.Prompt,
	// 		},
	// 		{
	// 			path: "/useSearch/1",
	// 			name: "useSearch",
	// 			component: pages.router.UseSearch,
	// 		},
	// 		{
	// 			path: "/useSearch/2/",
	// 			name: "useSearch",
	// 			component: pages.router.UseSearch,
	// 		},
	// 	],
	// },
	{
		path: "lib",
		name: "lib",
		children: [
			{
				path: "crypto",
				name: "Crypto",
				component: pages.lib.Crypto,
			},
			{
				path: "html2canvas",
				name: "Html2canvas",
				component: pages.lib.Html2Canvas,
			},
			{
				path: "html2word",
				name: "Html2Word",
				component: pages.lib.HtmlToWord,
			},
			{
				path: "html2pdf",
				name: "Html2PDF",
				component: pages.lib.Html2PDF,
			},
			{
				path: "dom2Image",
				name: "Dom2Image",
				component: pages.lib.Dom2Image,
			},
			{
				path: "g6",
				name: "G6",
				component: pages.lib.G6,
			},
			{
				path: "tinymce",
				name: "Tinymce",
				component: pages.lib.Tinymce,
			},
			{
				path: "ckeditor",
				name: "CKEditor",
				component: pages.lib.CKEditor,
			},
			{
				path: "wangEditor",
				name: "WangEditor",
				component: pages.lib.Wang,
			},
			{
				path: "recordrtc",
				name: "RecordRTC",
				component: pages.lib.RecordRTC,
			},
			{
				path: "dnd",
				name: "Dnd",
				component: pages.lib.DND,
			},
		],
	},
	{
		path: "source",
		name: "source",
		children: [
			{
				path: "formPage",
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
				path: "Cloud3D",
				name: "Cloud3D",
				component: pages.other.Cloud3D,
			},
			{
				path: "drag",
				name: "Drag",
				component: pages.other.Drag,
			},
			{
				path: "selectedTable",
				name: "SelectedTable",
				component: pages.other.SelectedTable,
			},
			{
				path: "tableRow",
				name: "TableRow",
				component: pages.other.TableRow,
			},
			{
				path: "selectedTableAntd",
				name: "SelectedTableAntd",
				component: pages.other.SelectedTableAntd,
			},
			{
				path: "lazyScroll",
				name: "LazyScroll",
				component: pages.other.LazyScroll,
			},
			{
				path: "linkForm",
				name: "LinkForm",
				component: pages.other.LinkForm,
			},
			{
				path: 'pageCommunication',
				name: '页面通信',
				children: [
					{
						path: "broadcast",
						name: "Broadcast",
						component: pages.other.BroadcastChannel,
					},
					{
						path: "serviceWorker",
						name: "ServiceWorker",
						component: pages.other.ServiceWorker,
					},
					{
						path: "localStorage",
						name: "LocalStorage",
						component: pages.other.LocalStorage,
					},
					{
						path: "indexedDB",
						name: "IndexedDB",
						component: pages.other.IndexedDB,
					},
					{
						path: "shareWorker",
						name: "ShareWorker",
						component: pages.other.ShareWorker,
					},
				],
			},
		],
	},
	{
		name: "地图",
		path: "map",
		children: [
			{
				path: "leaflet",
				name: "leaflet",
				component: pages.map.LeafletPage,
			},
		],
	},
];
export default routes;
