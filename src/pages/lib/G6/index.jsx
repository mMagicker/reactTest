import React, { useRef, useEffect } from "react";
import G6 from "@antv/g6";
import {
  data,
} from "./data";
import { Button } from "antd";
import {
  getIcon
} from './utils'



export default function G6Page() {
  const g6Wrap = useRef(null);
  const graphRef = useRef(null);


  const globalData = useRef({
    g6Data: {
      nodes: [],
      edges: []
    },
    temp: 1
  })
  const editCb = (cfg) => {
    const { id } = cfg;
    const { g6Data } = globalData.current;
    const { nodes, edges } = g6Data;
    const data = {
      nodes: [
        ...nodes,
        {
          id: String(id),
          label: "编辑了",
          area_name: "编辑了"
        }
      ],
      edges: []
    }
    globalData.current.g6Data = data;
    graphRef.current.changeData(data);
    graphRef.current.render()
  }

  useEffect(() => {
    G6.registerNode(
      'round-rect',
      {
        drawShape: function drawShape(cfg, group) {
          const r = 4;
          // 背景
          const shape = group.addShape('rect', {
            attrs: {
              x: 0,
              y: 0,
              fill: "#ccc",
              width: 200,
              height: 78,
              stroke: "#aaa",
              radius: r,
              shadowBlur: 12,
              shadowOffsetX: 0,
              shadowOffsetY: 6,
              shadowColor: "rgba(22,56,125,0.10)",
            },
            name: 'main-box',
          });

          // title text
          group.addShape('text', {
            attrs: {
              text: cfg.area_name,
              x: 20,
              y: 26,
              fontSize: 16,
              textAlign: 'left',
              textBaseline: 'middle',
              fill: "blue"
            },
            name: 'area_name',
          });

          //修改 
          const edit = group.addShape('text', {
            attrs: {
              x: 100,
              y: 20,
              fontFamily: 'iconfont', // 对应css里面的font-family: "iconfont";
              textAlign: 'center',
              textBaseline: 'middle',
              // text: "\u1012b",
              text: getIcon('发送'),
              fontSize: 30,
              fill: "red"
            },
            // must be assigned in G6 3.3 and later versions. it can be any value you want
            name: 'text-shape1',
            // attrs: {
            //   id: 'node-icon',
            //   x: 70,
            //   y: 55,
            //   fill: "red",
            //   fontSize: 20,
            //   textAlign: 'center',
            //   textBaseline: 'middle',
            //   text: "cc",
            // },
            // name: "edit"
          });

          edit.on('click', function () {
            editCb(cfg)
          })

          return shape;
        },
      },
      'single-node',
    );

    const width = g6Wrap.current.offsetWidth;
    const height = g6Wrap.current.offsetHeight;
    const graph = new G6.Graph({
      container: g6Wrap.current,
      width,
      height,
      layout: {
        type: 'dagre',
        rankdir: 'LR',
        nodesep: 30,
        ranksep: 100,
      },
      modes: {
        default: ['drag-canvas'],
      },
      defaultNode: {
        type: 'round-rect',
        labelCfg: {
          style: {
            fill: '#000000A6',
            fontSize: 10,
          },
        },
        style: {
          stroke: '#72CC4A',
          width: 150,
        },
      },
      defaultEdge: {
        type: 'fund-polyline',
      },
    });

    const g6_data = JSON.parse(JSON.stringify(globalData.current.g6Data));
    graph.data(g6_data);
    graph.render();

    setTimeout(() => {
      graph.paint();
    }, 160)

    graphRef.current = graph;
  }, []);

  const onAdd = () => {
    const { g6Data, temp } = globalData.current;
    const { nodes, edges } = g6Data;
    const id = temp + 1
    const data = {
      nodes: [
        ...nodes,
        {
          id: String(id),
          label: "新增了",
          area_name: "新增了"
        }
      ],
      edges: [
        ...edges,
      ]
    }
    globalData.current.temp = id;
    globalData.current.g6Data = data;
    graphRef.current.changeData(data);
  }

  const onRemove = () => {
    const data = {
      nodes: [],
      edges: []
    }
    globalData.current.g6Data = data;
    graphRef.current.changeData(data);

  }
  const onEdit = () => {
    const { g6Data } = globalData.current;
    const { nodes, edges } = g6Data;
    const data = {
      nodes: [
        ...nodes,
        {
          id: "11",
          label: "编辑了"
        }
      ],
      edges: [
      ]
    }
    globalData.current.g6Data = data;
    graphRef.current.changeData(data);
  }

  return <>
    <Button onClick={onAdd}>add</Button>
    <Button onClick={onEdit}>edit</Button>
    <Button onClick={onRemove}>remove</Button>
    <div ref={g6Wrap} style={{ width: "calc(100% - 300px)", height: "100vh" }}></div>;
  </>
}
