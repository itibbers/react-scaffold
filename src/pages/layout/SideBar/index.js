import React from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'antd'
const { SubMenu } = Menu

import { getMenus } from '@/api'

function baseMenuItem(item) {
  if (item.children && item.children.length > 0) {
    return (
      <SubMenu key={item.id} title={item.title}>
        {item.children.map(baseMenuItem)}
      </SubMenu>
    )
  } else {
    return (
      <Menu.Item key={item.id}>
        <Link to={item.link}>{item.title}</Link>
      </Menu.Item>
    )
  }
}

export default class SideBar extends React.PureComponent {
  state = {
    menus: [],
  }

  componentDidMount() {
    getMenus().then((res) => {
      this.setState({
        menus: res.data,
      })
    })
  }

  handleClick = (e) => {
    console.log('click ', e)
  }

  render() {
    return (
      <Menu
        theme="dark"
        onClick={this.handleClick}
        style={{ width: 256 }}
        mode="inline"
      >
        <Menu.Item>
          <Link to="/">首页</Link>
        </Menu.Item>
        {this.state.menus.map(baseMenuItem)}
      </Menu>
    )
  }
}
