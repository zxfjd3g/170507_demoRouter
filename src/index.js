import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from './components/App'
import About from './components/About'
import Repos from './components/Repos'
import Home from './components/Home'
import Repo from './components/Repo'


ReactDOM.render((
  <Router history={hashHistory}>
    {/*注册根路由*/}
    <Route path='/' component={App}>
      {/*注册子路由*/}
      <IndexRoute component={Home} />{/*默认子路由*/}
      <Route path='/about' component={About}/>
      <Route path='/repos' component={Repos}>
        <Route path='/repos/:name/:repo' component={Repo}/>
      </Route>

    </Route>
  </Router>
), document.getElementById('root'))
