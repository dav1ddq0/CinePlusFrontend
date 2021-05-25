import './App.css';
import SignIn from '../components/Login/Sigin'
import SignUp from '../components/Login/SignUp'
import AppBarInteraction from '../components/NavBar/CineplusAppbar'
import TabPanel from '../components/TabPanel'
import React, { Component } from 'react';
import Avatar from '../components/Avatar'
import {Route, Switch,Redirect} from 'react-router-dom';
import Movies from '../components/Movies'
class App extends Component {

  render(){
    let comp1 = false;
    console.log(comp1)
    
    return (
      <div>
        {/* <Movies/> */}
        <AppBarInteraction></AppBarInteraction>
        
        <Switch>
          <Route  path="/signup" component={SignUp}/>
          <Route  path="/signin"  component={SignIn}/>
          <Route path ='/movies' component={Movies}/>
        </Switch> 
        
        {/* <Movies/> */}
        
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
