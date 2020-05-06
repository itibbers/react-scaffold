import React from 'react'
import { Table } from 'antd'

export default function DataTable({
  columns,
  data,
  pagination,
  loading,
  handleTableChange,
}) {
  return (
    <Table
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  )
}
