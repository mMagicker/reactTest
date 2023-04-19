import React from 'react';
import { Table } from 'antd';

function SelectedTableAntd(props: {}) {
  const columns = [
    {
      title: '第一级',
      dataIndex: 'first',
      key: 'first',
    },
    {
      title: '第二级',
      dataIndex: 'second',
      key: 'second',
    },
  ]
  const data = [
    {
      key: '1',
      first: '第一级1',
      second: '第二级1',
    },
    {
      key: '2',
      first: '第一级2',
      second: '第二级2',
    }
  ]
  return (
    <Table
      columns={columns}
      dataSource={data}
    />
  );
}

export default SelectedTableAntd;