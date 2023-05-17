export const data = {
  id: 'root',
  label: 'root',
  children: [
    {
      id: 'c1',
      label: 'c1',
      children: [
        {
          id: 'c1-1',
          label: 'c1-1',
        },
        {
          id: 'c1-2',
          label: 'c1-2',
          children: [
            {
              id: 'c1-2-1',
              label: 'c1-2-1',
            },
            {
              id: 'c1-2-2',
              label: 'c1-2-2',
            },
          ],
        },
      ],
    },
    {
      id: 'c2',
      label: 'c2',
    },
    {
      id: 'c3',
      label: 'c3',
      children: [
        {
          id: 'c3-1',
          label: 'c3-1',
        },
        {
          id: 'c3-2',
          label: 'c3-2',
          children: [
            {
              id: 'c3-2-1',
              label: 'c3-2-1',
            },
            {
              id: 'c3-2-2',
              label: 'c3-2-2',
            },
            {
              id: 'c3-2-3',
              label: 'c3-2-3',
            },
          ],
        },
        {
          id: 'c3-3',
          label: 'c3-3',
        },
      ],
    },
  ],
}

export const defaultStateStyles = {
  hover: {
    stroke: '#1890ff',
    lineWidth: 2,
  },
};

export const defaultNodeStyle = {
  fill: '#91d5ff',
  stroke: '#40a9ff',
  radius: 5,
};

export const defaultEdgeStyle = {
  stroke: '#91d5ff',
  endArrow: {
    path: 'M 0,0 L 12, 6 L 9,0 L 12, -6 Z',
    fill: '#91d5ff',
    d: -20,
  },
};

export const defaultLayout = {
  type: 'compactBox',
  direction:"LR",
  getId: function getId(d) {
    return d.id;
  },
  getHeight: function getHeight() {
    return 16;
  },
  getWidth: function getWidth() {
    return 16;
  },
  getVGap: function getVGap() {
    return 40;
  },
  getHGap: function getHGap() {
    return 70;
  },
};

export const defaultLabelCfg = {
  style: {
    fill: '#000',
    fontSize: 12,
  },
};

export const COLLAPSE_ICON = function COLLAPSE_ICON(x, y, r) {
  return [
    ['M', x - r, y - r],
    ['a', r, r, 0, 1, 0, r * 2, 0],
    ['a', r, r, 0, 1, 0, -r * 2, 0],
    ['M', x + 2 - r, y - r],
    ['L', x + r - 2, y - r],
  ];
};
export const EXPAND_ICON = function EXPAND_ICON(x, y, r) {
  return [
    ['M', x - r, y - r],
    ['a', r, r, 0, 1, 0, r * 2, 0],
    ['a', r, r, 0, 1, 0, -r * 2, 0],
    ['M', x + 2 - r, y - r],
    ['L', x + r - 2, y - r],
    ['M', x, y - 2 * r + 2],
    ['L', x, y - 2],
  ];
};