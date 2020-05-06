import React from 'react'
import ReactDOM from 'react-dom'

import '../mock'

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'
moment.locale('zh-cn')

import { ConfigProvider } from 'antd'
import BaseLayout from './pages/layout'

class App extends React.PureComponent {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <BaseLayout />
      </ConfigProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
