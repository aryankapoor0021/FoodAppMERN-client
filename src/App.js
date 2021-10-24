import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import './App.css';

import AllFoods from './pages/AllFoods';
import MyCart from './pages/MyCart'
import Layout from './components/Layout/Layout'
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/allfoods"/>
        </Route>
        <Route path='/allfoods'>
          <AllFoods/>
        </Route>
        <Route path='/my-cart'>
          <MyCart/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
