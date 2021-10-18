import React from 'react'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    // 设置面包屑内容
    // main.appInfo.crumbsState.setCrumbs(['首页', '选车', '丰田', '凯美瑞', '资讯列表'])
  }

  render() {
    return (
      <div className="index">
        react-index
      </div>
    )
  }
}

export default Index
