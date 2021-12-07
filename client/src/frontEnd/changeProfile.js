import React, { Component } from 'react';
import styles from './newStyle.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './footer';
import NavigationBar from './navigation';
class ChangeProfile extends Component {    
    constructor(props){
        super(props)
        this.state={
            marginTop:"30px",
            imgsrc:"/img/user.png"
        }
    }
        
    render() { 
        return <React.Fragment>
   <div className="container-fluid my-5 py-5" id={styles.profileDivOne}>
              <strong className="fixed-top" id={styles.campusText} >Campus chat</strong>
              <NavigationBar/>
              <center>
                  <div>
                      <strong style={{marginTop:"20px",fontSize:"20px"}}>Personal Profile</strong>
                   </div>
               </center>
        <div className="row">
               <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="bg-light rounded" id={styles.ProfileDivTwo}>
                    <div style={{width:"150px",height:"150px",borderRadius:"50%"}}>
                    <img id={styles.imgStyle} rel="icon" src={this.state.imgsrc}/>                                  
                         </div>
                         <label style={{marginTop:this.state.marginTop}}><strong>Username:</strong></label><br></br>
                         <label style={{marginTop:this.state.marginTop}}><strong>FullName:</strong></label><br></br>
                         <label style={{marginTop:this.state.marginTop}}><strong>Email:</strong></label><br></br>
                         </div>
               </div>
               <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="bg-light rounded" id={styles.ProfileDivTwo}>
                    <label style={{marginTop:this.state.marginTop}}><strong>Status:</strong></label><br></br>
                         <label style={{marginTop:"100px"}}><strong>Occupation:</strong></label><br></br>
                         <form>
                         <button className="btn btn-primary my-3" type="button">Edit</button>
                         </form>
                   
                    </div>
               </div>
         </div>
         
 </div>
 <Footer />
        </React.Fragment>;
    }
}
 
export default ChangeProfile;