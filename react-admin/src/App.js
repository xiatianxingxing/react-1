import React from 'react';
// 引入路由
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/home/home';
import Admin from './pages/admin/admin'
import './App.css'
import './assets/css/base.css'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/admin' component={Admin}></Route>
        <Route path='/' component={Home}></Route>
      
      </Switch>
    </BrowserRouter>
  );
}

export default App;
/*
  export default class App extends Component {
    render (){
      return <div>app</div>
    }
  }
*/
