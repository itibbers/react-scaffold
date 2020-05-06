import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/redux/store'

import { Layout } from 'antd'
const { Sider, Content } = Layout
import './index.css'

import SideBar from './SideBar'
import HeaderBar from './HeaderBar'
import RouterView from '@/router'

export default class BaseLayout extends React.PureComponent {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
              }}
            >
              <div
                className="logo"
                style={{
                  height: '30px',
                  lineHeight: '30px',
                  textAlign: 'center',
                  color: '#fff',
                  background: '#333',
                }}
              >
                Admin
              </div>
              <SideBar />
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
              <HeaderBar />
              <Content
                className="site-layout-background"
                style={{
                  padding: '1em',
                  minHeight: 280,
                  overflow: 'initial',
                }}
              >
                <RouterView />
              </Content>
            </Layout>
          </Layout>
        </Router>
      </Provider>
    )
  }
}
