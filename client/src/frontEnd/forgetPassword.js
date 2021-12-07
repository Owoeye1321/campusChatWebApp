import React, { Component } from 'react';
import styles from './newStyle.module.css';
import  'bootstrap/dist/css/bootstrap.min.css'
class ForgetPassword extends Component {
    constructor(props){
        super(props)
        this.state={
            err:null,
            email:"",           
            inputType:"submit",
            inputClass:"form-control",
            colorChanges:"green"               
        }
    }

    render() { 
        return <React.Fragment>
  <center>
            <div className="container pt-3 " >
              
  <div  style={{marginTop:"100px",marginBottom: "0px"}}>
    <img style={{height:"50px",width:"50px"}} alt="" src="/img/chat-icon.png"/>
      </div>
                <div id={styles.logDiv} >
                <span id={styles.Namestyle}>Forget Password</span>
                <form method="">
                    <input  className={this.state.inputClass} id={styles.inputStyles} type="email" name="email" placeholder="Email"/>
                    <div  id={styles.err} ><i style={{color:this.state.colorChanges,marginBottom:"-10px"}}>{this.state.err}</i></div>
                    <input style={{marginBottom:"-1px"}} className="btn btn-outline-primary" type={this.state.inputType} value="Submit" id={styles.inputStyles}/><br></br>   
                    </form>
                </div>
                <div id={styles.createNewSiteInfo}>
                    <span id={styles.textfont}>New to My Profile?</span> <a id={styles.extraLink} href="/SignUp">Create an account</a><br></br>
                    </div>  
                             
                   
            </div>
              </center>
              
        </React.Fragment>;
    }
}
 
export default ForgetPassword;