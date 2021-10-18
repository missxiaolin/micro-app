import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from '../pages/login/index.jsx';
import Index from '../pages/index/index.jsx';

// 使用store的方法
import { useLocalReducer } from '../store/useLocalReducer';
import { context } from '../hooks/useLocalContext';

const BasicMap = () => {

  const [state, dispatch] = useLocalReducer();

  return (
    <context.Provider value={{ state, dispatch }}>
      <HashRouter>
        <Switch>
          {/* App页面 */}
          <Route path="/login" component={Login}/>
          <Route path="/" component={Index}/>
        </Switch>
      </HashRouter>
    </context.Provider>
  );
}

export default BasicMap
