import React, { Fragment } from 'react'
import request from '@/utils/request'
import { getMenuInfo } from '@/api'
import ActionBar from './ActionBar'
import DataTable from './DataTable'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
]

const getRandomuserParams = (params) => {
  return {
    results: params.pagination.pageSize,
    page: params.pagination.current,
    ...params,
  }
}

export default class Query extends React.PureComponent {
  state = {
    menuId: '',
    menuInfo: {},
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
  }

  componentDidMount() {
    this.fetch()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.fetch()
    }
  }

  fetch = () => {
    const params = new URLSearchParams(this.props.location.search)
    const menuId = params.get('id')
    const { pagination } = this.state
    this.fetchMenu(menuId)
    this.fetchData({ pagination, menuId })
  }

  fetchMenu = (menuId) => {
    this.setState({ menuId })
    getMenuInfo(menuId).then((res) => {
      console.log('menuInfo', res)
      this.setState({
        menuInfo: res.data,
      })
    })
  }

  fetchData = (params = {}) => {
    this.setState({ loading: true })
    console.log(getRandomuserParams(params))
    request({
      url: 'https://randomuser.me/api',
      method: 'get',
      params: getRandomuserParams(params),
    }).then((res) => {
      console.log('data', res)
      this.setState({
        loading: false,
        data: res.results,
        pagination: {
          ...params.pagination,
          total: 200, // 200 is mock data, you should read it from server
        },
      })
    })
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.fetchData({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    })
  }

  render() {
    const { menuInfo, data, pagination, loading } = this.state
    return (
      <Fragment>
        <ActionBar actions={menuInfo.actions || []} />
        <DataTable
          columns={columns}
          data={data}
          pagination={pagination}
          loading={loading}
          handleTableChange={this.handleTableChange}
        />
      </Fragment>
    )
  }
}
