import React, { useEffect, useState } from 'react';
import './index.scss'

const TableRow = () => {

  const data = [
    {
      title: "1",
      length: 16,
      children: [
        {
          title: "1-1",
          length: 10,
          children: [
            {
              title: "1-1-1",
              length: 5,
              children: [
                {
                  title: "1-1-1-1",
                },
                {
                  title: "1-1-1-2",
                },
                {
                  title: "1-1-1-3",
                },
                {
                  title: "1-1-1-4",
                },
                {
                  title: "1-1-1-5",
                }
              ]
            },
            {
              title: "1-1-2",
              length: 5,
              children: [
                {
                  title: "1-1-2-1",
                },
                {
                  title: "1-1-2-2",
                },
                {
                  title: "1-1-2-3",
                },
                {
                  title: "1-1-2-4",
                },
                {
                  title: "1-1-2-5",
                }
              ]
            }
          ]
        },
        {
          title: "1-2",
          length: 6,
          children: [
            {
              title: "1-2-1",
              length: 3,
              children: [
                {
                  title: "1-2-1-1",
                },
                {
                  title: "1-2-1-2",
                },
                {
                  title: "1-2-1-3",
                }]
            },
            {
              title: "1-2-2",
              length: 3,
              children: [
                {
                  title: "1-2-2-1",
                },
                {
                  title: "1-2-2-2",
                },
                {
                  title: "1-2-2-3",
                }]
            }
          ]
        }
      ]
    },
    {
      title: "2",
      length: 1300,
      children: []
    }
  ]
  const [tableData, setTableData] = useState([])

  const test = [
    {
      title: "1",
      length: 2,
      children: [
        {
          title: "1-1",
        },
        {
          title: "1-2"
        }
      ]
    }
  ]
  const renderBody = (data, rest = []) => {
    return data.map((item, index) => {
      const hasChild = !!item.children
      const _rest = !index ? [...rest, item] : [item]
      return hasChild ? renderBody(item.children, _rest) : index == 0 ? <tr>
        {
          _rest.map((item, index) => {
            return <td key={index} rowSpan={item.length} onClick={() => console.log(item.depth)}>
              {item.title}
            </td>
          })
        }
      </tr> : <tr>
        <td onClick={() => console.log(item.depth)}>
          {item.title || ""}
        </td>

      </tr>
    })
  }
  const formatData = (data, depth = 1) => {
    // 如果深度没有5级，补齐children
    return data.map(item => {
      const hasChild = !!item.children
      if(hasChild) {
        return {
          ...item,
          depth: depth,
          children: formatData(item.children, depth + 1)
        }
      }
      return {
        ...item,
        depth: depth,
        children: depth < 5 ? formatData([{title: "",}], depth + 1)
          : [
            {
              title: "",
            }
          ]
      }
    })
  }
  useEffect(() => {
    const _data = [...data]
    for(let i = 1; i < 1300; i++) {
      _data[1].children.push({
        title: "2-" + i,
      })
    }
    const newData = formatData(_data);
    setTableData(newData)
  }, [])


  return <div className="table-row">
    <table>
      <thead>
        <tr>
          <th>一级</th>
          <th>二级</th>
          <th>三级</th>
          <th>4级</th>
          <th>五级</th>
        </tr>
      </thead>

      <tbody>
        {renderBody(tableData)}
      </tbody>
    </table>
  </div>;
};

export default TableRow;