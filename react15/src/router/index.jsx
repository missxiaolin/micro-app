import React from 'react'
import { Router, Route, hashHistory } from 'react-router';

// 资讯最终页
import Index from '../pages/index/index.jsx';


class BasicMap extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Index}/>
      </Router>
    )
  }
}

export default BasicMap
