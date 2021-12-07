import React, { Component } from 'react';
import axios from 'axios'
import styles from './newStyle.module.css';
import  'bootstrap/dist/css/bootstrap.min.css'
class LoginUser extends Component {
    constructor(props){
        super(props)
        this.state={
            loginDetails:{
                username:"",
                password:"",               
            },
            
            
            logginIn:false,   
            inputType:"submit",           
            inputClass:"form-control",
            colorChanges:"red",
            classNameOne:"container pt-3 ",
            imgsrc:"/img/chat-icon.png",
            marginInch:"-1px",
            marginInchLarge:"-1px",
            submitClass:"btn btn-outline-primary",
            signUpLink:"/SignUp"
        }
    }
     myChangeHandler  = (event)=>{
        let nam = event.target.name;
        let val = event.target.value;
        let statusCopy = Object.assign({},this.state)
        statusCopy.loginDetails[nam]=val;
        this.setState(statusCopy)
        //console.log(nam + val)
    }
    HandleSubmit = (event)=>{
        const baseUrl="http://localhost:4001/login"
        event.preventDefault();
        alert("A form is loading")
        const SetData = JSON.stringify((this.state.loginDetails))               
        axios.post(baseUrl,SetData)
        .then((res)=>{console.log(res.data)
            if(res.data ==="success"){
                window.location.assign("http://localhost:3000/editProfile")
            }else{
                this.setState({error:res.data})
            }
        })
        .catch((err)=>{console.log("You have made a big error "+err)
         })        
        
    }
  
    render() { 
        return <React.Fragment>            
  <div className=" 5s animated bounce zoomInDown">
            <center>
            <div className={this.state.classNameOne}>
              
  <div  id={styles.logInImgDiv}>
    <img className={styles.equalImgDimention} alt="" src={this.state.imgsrc}/>
      </div>
                <div id={styles.logDiv} >
                <span id={styles.Namestyle}>Login</span>
                <form onSubmit={this.HandleSubmit}>
                    <input onChange={this.myChangeHandler} required className={this.state.inputClass} id={styles.inputStyles} type="text" name="username" placeholder="Username"/>
                    <input onChange={this.myChangeHandler}  required className={this.state.inputClass} id={styles.inputStyles} type="password" name="password" placeholder="Password"/>
                    <div  id={styles.err} >
                        <i style={{color:this.state.colorChanges,marginBottom:this.state.marginInchLarge}}>{this.state.error}</i>
                        </div>
                    <input style={{marginBottom:this.state.marginInch}} className={this.state.submitClass} type={this.state.inputType} value="submit" id={styles.inputStyles}/><br></br>   
                    <a id={styles.forget_password} href="/forgetPassword">Forget password?</a>                    
                </form>
                </div>
                <div id={styles.createNewSiteInfo}>
                    <span id={styles.textfont}>New to My Profile?</span> <a id={styles.extraLink} href="/SignUp">Create an account</a><br></br>
                    </div>  
                             
                   
            </div>
              </center>
              </div>
              
           
        </React.Fragment>;
    }
}
 
export default LoginUser;