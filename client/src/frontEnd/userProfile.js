import React, { Component } from 'react';
import styles from './newStyle.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './footer';
import NavigationBar from './navigation';
class UserProfile extends Component {    
    constructor(props){
        super(props)
    }
        
    render() { 
        return <React.Fragment>
   <div className="container-fluid my-5 py-5" id={styles.profileDivOne}>
              <strong className="fixed-top" id={styles.campusText} >Campus chat</strong>
              <NavigationBar/>
              <center>
                  <div>
                      <strong style={{marginTop:"20px",fontSize:"20px"}}>User Profile</strong>
                   </div>
               </center>
        <div className="row">
               <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="bg-light rounded" id={styles.ProfileDivTwo}>
                    <div style={{width:"150px",height:"150px",borderRadius:"50%"}}>
                    <img id={styles.imgStyle} rel="icon" src="/img/user.png"/>                                  
                         </div>
                         <label style={{marginTop:"30px"}}><strong>Username:</strong></label><br></br>
                         <label style={{marginTop:"30px"}}><strong>FullName:</strong></label><br></br>
                         <label style={{marginTop:"30px"}}><strong>Email:</strong></label><br></br>
                         </div>
               </div>
               <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="bg-light rounded" id={styles.ProfileDivTwo}>
                    <label style={{marginTop:"30px"}}><strong>Status:</strong></label><br></br>
                         <label style={{marginTop:"100px"}}><strong>Occupation:</strong></label><br></br>
                         <button className="btn btn-primary my-3" type="button"><a style={{color:"white"}} id={styles.extraLink} href = "changeProfile"> Edit</a></button>
                         
                   
                    </div>
               </div>
         </div>
         
 </div>
 <Footer />
        </React.Fragment>;
    }
}
 
export default UserProfile;