import React from 'react'
import { Button } from 'antd'

export default function ExportXlsx({ type, conf }) {
  const title = conf.title || '导出Excel'
  return <Button>{title}</Button>
}
