import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import '../mock/mock.js'
import { ConfigProvider, DatePicker, message, Alert } from 'antd'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'
// import './index.css'

moment.locale('zh-cn')

import Nav from './components/Nav'
import getRouter from './router'

class App extends React.PureComponent {
  state = {
    date: null,
  }

  handleChange = (date) => {
    message.info(
      `您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}`
    )
    this.setState({ date })
  }
  render() {
    const { date } = this.state
    return (
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <Router>
            <Nav />
            {getRouter()}
          </Router>
        </Provider>
        <div style={{ width: 400, margin: '10px auto' }}>
          <DatePicker onChange={this.handleChange} />
          <Alert
            message={`当前日期：${date ? date.format('YYYY-MM-DD') : '未选择'}`}
            type="success"
          />
        </div>
      </ConfigProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
