import React, { useRef, useEffect } from "react";
import G6 from "@antv/g6";
import {
  data,
  defaultEdgeStyle,
  defaultLabelCfg,
  defaultLayout,
  defaultNodeStyle,
  defaultStateStyles,
  EXPAND_ICON,
  COLLAPSE_ICON,
} from "./data";

export default function G6Page() {
  const g6Wrap = useRef(null);

  G6.registerNode(
    "icon-node",
    {
      options: {
        size: [60, 20],
        stroke: "#91d5ff",
        fill: "#91d5ff",
      },
      draw(cfg, group) {
        const styles = this.getShapeStyle(cfg);
        const { labelCfg = {} } = cfg;

        const w = styles.width;
        const h = styles.height;

        const keyShape = group.addShape("rect", {
          attrs: {
            ...styles,
            x: -w / 2,
            y: -h / 2,
          },
        });

        /**
         * leftIcon 格式如下：
         *  {
         *    style: ShapeStyle;
         *    img: ''
         *  }
         */
        // console.log("cfg.leftIcon", cfg.leftIcon);
        if (cfg.leftIcon) {
          const { style, img } = cfg.leftIcon;
          group.addShape("rect", {
            attrs: {
              x: 1 - w / 2,
              y: 1 - h / 2,
              width: 38,
              height: styles.height - 2,
              fill: "#8c8c8c",
              ...style,
            },
          });

          group.addShape("image", {
            attrs: {
              x: 8 - w / 2,
              y: 8 - h / 2,
              width: 24,
              height: 24,
              img:
                img ||
                "https://g.alicdn.com/cm-design/arms-trace/1.0.155/styles/armsTrace/images/TAIR.png",
            },
            name: "image-shape",
          });
        }

        // 如果不需要动态增加或删除元素，则不需要 add 这两个 marker
        group.addShape("marker", {
          attrs: {
            x: 40 - w / 2,
            y: 52 - h / 2,
            r: 6,
            stroke: "#73d13d",
            cursor: "pointer",
            symbol: EXPAND_ICON,
          },
          name: "add-item",
        });

        group.addShape("marker", {
          attrs: {
            x: 80 - w / 2,
            y: 52 - h / 2,
            r: 6,
            stroke: "#ff4d4f",
            cursor: "pointer",
            symbol: COLLAPSE_ICON,
          },
          name: "remove-item",
        });

        group.addShape("text", {
          attrs: {
            x: 10,
            y: 10,
            textAlign: "left",
            textBaseline: "top",
            text: "\u10118" 
          },

        })

        if (cfg.label) {
          group.addShape("text", {
            attrs: {
              ...labelCfg.style,
              text: cfg.label,
              x: 50 - w / 2,
              y: 25 - h / 2,
            },
          });
        }

        return keyShape;
      },
      update: undefined,
    },
    "rect"
  );

  G6.registerEdge("flow-line", {
    draw(cfg, group) {
      const startPoint = cfg.startPoint;
      const endPoint = cfg.endPoint;

      const { style } = cfg;
      const shape = group.addShape("path", {
        attrs: {
          stroke: style.stroke,
          endArrow: style.endArrow,
          path: [
            ["M", startPoint.x, startPoint.y],
            ["L", startPoint.x, (startPoint.y + endPoint.y) / 2],
            ["L", endPoint.x, (startPoint.y + endPoint.y) / 2],
            ["L", endPoint.x, endPoint.y],
          ],
          path: [
            ["M", startPoint.x, startPoint.y],
            ["L", (startPoint.x + endPoint.x) / 2, startPoint.y],
            ["L", (startPoint.x + endPoint.x) / 2, endPoint.y],
            ["L", endPoint.x, endPoint.y],
          ]
        },
      });

      return shape;
    },
  });
  useEffect(() => {
    const container = g6Wrap.current;
    const width = container.scrollWidth;
    const height = container.scrollHeight || 500;

    const graph = new G6.TreeGraph({
      container: container,
      width,
      height,
      linkCenter: true,
      modes: {
        default: ["drag-canvas", "zoom-canvas"],
      },
      defaultNode: {
        type: "icon-node",
        size: [120, 40],
        style: defaultNodeStyle,
        labelCfg: defaultLabelCfg,
      },
      defaultEdge: {
        type: "flow-line",
        style: defaultEdgeStyle,
      },
      nodeStateStyles: defaultStateStyles,
      edgeStateStyles: defaultStateStyles,
      layout: defaultLayout,
    });

    graph.data(data);
    graph.render();
    graph.fitView();
  }, []);

  return <div ref={g6Wrap} style={{ width: "calc(100% - 300px)", height: "100vh" }}></div>;
}
