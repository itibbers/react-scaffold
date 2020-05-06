import React from 'react'
import { Route, Switch } from 'react-router-dom'

// import { lazy } from '@/utils/asyncComponent'
import loadable from '@loadable/component'

export const routes = [
  {
    path: '/',
    title: '首页',
    exact: true,
    component: loadable(() => import('pages/home')),
  },
  {
    path: '/query',
    title: '列表页',
    component: loadable(() => import('pages/query')),
  },
  {
    path: '/edit',
    title: '编辑页',
    component: loadable(() => import('pages/edit')),
  },
  {
    title: '404',
    component: loadable(() => import('pages/notfound')),
  },
]

export default function RouterView() {
  return (
    <Switch>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        )
      })}
    </Switch>
  )
}
