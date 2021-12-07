import React, { Component } from 'react';
class NavExtension extends Component {
   
    render() { 
        return <React.Fragment>
            <div  className={this.props.bgligth} >
                   <h5>Terms</h5>
                 <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                 <span>A user is required to provide requested data to create a full profile in the campus chat,hence disobidient to do so might cause an inactivation of individual account.</span>  
                    <span>Campus chat is a platform for individuals or team in a community to interract and spamming of an account could cause inactivation</span>                  
                 </li>
                      </ul>
                      </div> 
                      <div  className={this.props.bgligth} >
                      <h5 className="my-3">Privacy</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
           <span>Your data security is our concern and it wouldnt be jeopardized,we really care about your data security most especially.</span>
		<span>Please ensure that your administrative logs are not disclosed to a third party,your administrative logs is the most important key and access to your activity on here.</span>                       
        </li>
      </ul></div>
      <div  className={this.props.bgligth} >
      <h5>Contact Us</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
            <p>Email: Owoeye1321@gmail.com</p>
             <p>Phone: 09153464158</p>
               <p >Github.com/Owoeye1321</p>
             <p >Linkedin.com/in/OwoeyeSamuel</p>
               </li>
      </ul>
                    </div>   
        </React.Fragment>;
    }
}
 
export default NavExtension;