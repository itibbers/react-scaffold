import React from 'react'
import { useLocation } from 'react-router-dom'
import { Layout } from 'antd'
const { Header } = Layout
import { routes } from '@/router'

export default function HeaderBar() {
  const { pathname, search } = useLocation()
  const { title } = routes.find((route) => route.path.includes(pathname))
  // const params = new URLSearchParams(search)
  // console.log(params.get('id'))
  return (
    <Header
      className="site-layout-background"
      style={{
        paddingLeft: '1em',
        borderBottom: '1px solid rgba(34,36,38,.15)',
      }}
    >
      <h2>{title}</h2>
    </Header>
  )
}
