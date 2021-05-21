import './App.css';
import SignIn from '../components/Login/Sigin'
import SignUp from '../components/Login/SignUp'
import UserAccount from '../components/Login/UserAccountNavBar'
import AppBar from '../components/NavBar/AppBar'
import React, { Component } from 'react';
import Avatar from '../components/Avatar'
import {Route, Switch} from 'react-router-dom';
class App extends Component {

  render(){
    return (
      <div>
        <AppBar>
        <Switch>
          <Route path="/signup" componenent={SignUp}/>
          <Route path="/" exact componenent={SignIn}/>
        </Switch>
        </AppBar>
        
        
        {/* <AppBar></AppBar>
        <SignUp></SignUp>
         */}
      </div>
      
      
      

    
      // <SignUp></SignUp>
      // <SignIn/>
      // <UserAccount></UserAccount>
      
      // <Avatar
      //   name={'David'}
      // ></Avatar>
      
    );
  }

 
}

export default App;
