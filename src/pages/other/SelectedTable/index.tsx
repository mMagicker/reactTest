// 实现一个每个单元格都可以选择的table
import React, { useState, } from 'react';
import './SelectedTable.scss'

function SelectableTable() {
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  interface dataType {
    id: number;
    name: string;
    age: number;
    phone: number;
  }

  const data: dataType[] = [
    {
      id: 1,
      name: 'node1',
      age: 11,
      phone: 11111111111
    },
    {
      id: 2,
      name: 'node2',
      age: 22,
      phone: 22222222222
    },
    {
      id: 3,
      name: 'node3',
      age: 33,
      phone: 33333333333
    }
  ]

  interface ColumnsType {
    title: string;
    dataIndex: string;
    key: string;
  }

  const columns: ColumnsType[] = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
    }
  ]

  const onTdClick = (row: dataType, dataIndex: string) => {
    const {id} = row
    const _newId = `${id}-${dataIndex}`
    const _ids = [...selectedIds]
    if(_ids.includes(_newId)) {
      setSelectedIds(_ids.filter(id => id !== _newId))
    } else {
      setSelectedIds([..._ids, _newId])
    }
  }

  // ------

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            {
              columns.map((column, index) => (
                <th key={index}>{column.title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {
                columns.map((column, columnIndex) => (
                  <td
                    className={selectedIds.includes(`${row.id}-${column.dataIndex}`) ? "selected" : ""}
                    onClick={() => onTdClick(row, column.dataIndex)} key={columnIndex}
                  >{row[column.dataIndex]}</td>
                ))
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SelectableTable;