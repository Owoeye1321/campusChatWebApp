import React, { Component } from 'react';
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import LoginUser from './login';
import HomePage from './homepage';
import SignUp from './signUp';
import ForgetPassword from './forgetPassword';
import CampusChats from './campusChats';
import CampusChatNews from './campusChatNews';
import CampusChatFriends from './campusChatFriends';
import CampusChatHome from './campusChatHome';
import MainChat from './mainChat';
import EditUserProfile from './editProfile';
import UserProfile from './userProfile';
import ChangeProfile from './changeProfile'
class MyReactRouting extends Component {
    render() { 
        return    <React.Fragment>
        <Router>
            <Switch> 
            <Route exact path='/'>
                <HomePage/>
                </Route>
            <Route path='/login'>
                <LoginUser/>
                </Route>
                <Route path='/SignUp'>
                <SignUp/>
                </Route>  
                <Route path='/forgetPassword'>
                <ForgetPassword/>
                </Route>     
                <Route  path="/CampusChatHome">
              <CampusChatHome/>
                  </Route>
                  <Route  path="/CampusChatNews">
              <CampusChatNews/>
                  </Route>
                  <Route  path="/CampusChatFrends">
              <CampusChatFriends/>
                  </Route>
                  <Route  path="/CampusChat">
              <CampusChats/>
                  </Route> 
                  <Route  path="/mainChat">
              <MainChat/>
                  </Route>  
                  <Route  path="/editProfile">
              <EditUserProfile/>
                  </Route>     
                  <Route  path="/userProfile">
              <UserProfile/>
                  </Route>   
                   
                  <Route  path="/changeProfile">
              <ChangeProfile/>
                  </Route>           
            
            </Switch>
           
        </Router>


</React.Fragment>;
    }
}
 
export default MyReactRouting;