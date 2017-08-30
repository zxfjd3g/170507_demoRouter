/**
 * 路由组件
 */
import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Repos extends Component {

  state = {
    repos: [
      {
        username: 'facebook',
        repoName: 'yarn'
      },
      {
        username: 'facebook',
        repoName: 'react'
      },
      {
        username: 'google',
        repoName: 'angular'
      },
      {
        username: 'ant',
        repoName: 'antd'
      }
    ]
  }

  render () {
    return (
      <div>
        <hr/>
        <h3>Repos 组件</h3>
        <ul>
          {
            this.state.repos.map((repo, index) => (
              <li key={index}>
                <Link to={`/repos/${repo.username}/${repo.repoName}`}>{repo.repoName}</Link>
              </li>
            ))
          }
        </ul>
        {/*显示当前路由组件*/}
        {this.props.children}
      </div>
    )
  }
}