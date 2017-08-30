import React from 'react'
import {Link} from 'react-router'

export default function App (props) {
  return (
    <div>
      <h1>Hello, React Router!</h1>
      <ul>
        <li>
          <Link to="/about" activeClassName="active2">About</Link>
        </li>
        <li>
          <Link to="/repos" activeClassName="active2">Repos</Link>
        </li>
      </ul>

      {/*显示当前路由组件*/}
      {props.children}
    </div>
  )
}