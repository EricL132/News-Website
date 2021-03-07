import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/homepage/home.js'
import Account from './components/pages/accountpage/account.js'
import ResetPass from './components/pages/resetpasspage/resetpass.js'
import NoPage from './components/pages/pagenotfound/pagenotfound'
import Navbar from './components/pages/navbar/nav.js'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Navbar></Navbar>
        
        <Switch>
     
          <Route path='/' exact component={Home}></Route>
       
          <Route path='/account' exact component={Account}></Route>
          <Route path='/account/resetpass' exact>
              <Route path='/:token' component={ResetPass}></Route>
          </Route>
          <Route path='*' exact component={NoPage}></Route>
        </Switch>
        
      </BrowserRouter>
    )
  }
}

export default App;
