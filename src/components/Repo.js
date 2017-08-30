import React, {Component} from 'react'
export default class Repo extends Component {
  render () {
    const {name, repo} = this.props.params  //路由链接参数
    return (
      <div>用户名:{name}, 仓库名:{repo}</div>
    )
  }
}