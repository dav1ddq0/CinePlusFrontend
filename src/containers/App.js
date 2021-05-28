import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './Layout/Layout'
import VirtualCinema from './VirtualCinema/VirtualCinema';
import CheckOut from './Checkout/Checkout'
import Signin from './SignIn/SignIn'
import Signup from './SignUp/SignUp'

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/checkout" component={CheckOut} />
            <Route path="/" component={VirtualCinema} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
export default App;
