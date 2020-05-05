import React from 'react'
import { Route, Switch } from 'react-router-dom'

// import { lazy } from '@/utils/asyncComponent'
import loadable from '@loadable/component'
import Home from 'pages/home'
// const About = lazy('pages/about')
// const Counter = lazy('pages/counter')
const About = loadable(() => import('pages/about'))
const Counter = loadable(() => import('pages/counter'))
const UserInfo = loadable(() => import('pages/userInfo'))
const NotFound = loadable(() => import('pages/notfound'))

export default function getRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/counter" component={Counter} />
      <Route path="/userinfo" component={UserInfo} />
      <Route component={NotFound} />
    </Switch>
  )
}
