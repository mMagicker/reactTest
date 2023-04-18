const treeData = [
  {
    id: 1,
    name: '1',
    children: [
      {
        id: 2,
        name: '2',
        children: [
          {
            id: 3,
            name: '3',
          },
          {
            id: 4,
            name: '4',
          }
        ]
      }
    ]
  }
]
const keys = [3]
const targetTree = [
  {
    id: 1,
    name: '1',
    children: [
      {
        id: 2,
        name: '2',
        children: [
          {
            id: 3,
            name: '3',
          }
        ]
      }]
  }
]

// 根据tree和提供的key生成新的tree
const generateTree = (allTreeData = treeData, _keys = keys) => {
  const newTree = []
  const loop = (treeData) => {
    treeData.forEach((item) => {
      if (_keys.includes(item.id)) {
        newTree.push(item)
      } else if (item.children) {
        loop(item.children)
      }
    })
  }
  loop(allTreeData)
  return newTree
}

export default generateTree