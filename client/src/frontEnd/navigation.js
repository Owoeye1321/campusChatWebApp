import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
class NavigationBar extends Component {
  constructor(){
    super()
    this.state={
      navClass:"navbar navbar-expand-lg navbar-light fixed-top bg-light rounded my-5"
    }
  }
    render() { 
        return <React.Fragment>
       
            <div  className="container my-3">
                <header>
                 
                <div style={{margin: "10px 0px 10px 0px"}}>
                <nav className={this.state.navClass} aria-label="Eleventh navbar example">
      <div className="container-fluid">
      <a className="nav-link bg-light" aria-current="page" href="/CampusChatHome">
    <img style={{height:"30px",width:"30px"}} alt="icon" src="/img/chat-icon.png"/>Campus Chat</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link  bg-light"  href="/CampusChatNews">News</a>
            </li>
            <li className="nav-item">
            <a className="nav-link  bg-light" href="/CampusChatFrends" >Friends</a>
            </li>
            <li className="nav-item">
            <a className="nav-link  bg-light"  href="/CampusChat" >Chats</a>
            </li>
            <li className="nav-item">
            <a className="nav-link  bg-light"  href="/UserProfile" >Profile</a>
            </li>
            
          </ul>
          <form>
            
            <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                         
          </form>
          
        </div>
      </div>
    </nav>

                </div>
                
                
                         
                </header>
                
            
            </div>
         
        </React.Fragment>;
    }
}
 
export default NavigationBar;