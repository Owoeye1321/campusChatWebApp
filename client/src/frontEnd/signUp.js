import React, { Component } from 'react';
import axios from 'axios'
import styles from './newStyle.module.css';
import  'bootstrap/dist/css/bootstrap.min.css'
class SignUp extends Component {
    constructor(){
        super()
        this.state = {   
            SignUpDetails:{
                 email:"",
                username:"",
                password:"",
                
            },
            err:"Password must be at least 8 character",
            SignedIn:false,   
            inputClass:"form-control",
            colorChanges:"green",
            classNameOne:"container pt-3 ",
            imgsrc:"/img/chat-icon.png",
            marginInch:"-1px",
            marginInchLarge:"-1px",
            submitClass:"btn btn-outline-primary"
        }
    }

    myChangeHandler = (event)=>{
        let nam = event.target.name;
        let val = event.target.value;
        let statusCopy = Object.assign({},this.state)
        statusCopy.SignUpDetails[nam] = val
        this.setState(statusCopy)

    }

    handleSubmit = (event)=>{
    event.preventDefault(); 
    alert("Processing the signUp details");
    const UrlCode = "http://localhost:4001/signUp" ;
    const myData = JSON.stringify(this.state.SignUpDetails)
    axios.post(UrlCode,myData)
    .then((res)=>{console.log(res.data)
        if(res.data ==="success"){
            window.location.assign("http://localhost:3000/editProfile")
        }else{
            this.setState({ colorChanges:"red"  });
             this.setState({err:res.data})}
        }
    )
    .catch((err)=>{console.log("An error has occured" + err)})    

     
    }


    render() { 
        return <React.Fragment>
              
  <div className=" 5s animated bounce zoomInDown">
            <center>
            <div className={this.state.classNameOne}>
               
               <div id={styles.logInImgDiv}>
    <img className={styles.equalImgDimention} alt="" src={this.state.imgsrc}/>
                   </div>
                         <div id={styles.logDiv} >
                         <span id={styles.Namestyle}>SignUp</span>
                             <form onSubmit={this.handleSubmit}>
                                 <input onChange = {this.myChangeHandler} className={this.state.inputClass} id={styles.inputStyles} type="email" name="email" placeholder="Email"/>
                                 <input onChange = {this.myChangeHandler} className={this.state.inputClass} id={styles.inputStyles} type="text" name="username" placeholder="Username"/>
                                 <input onChange = {this.myChangeHandler} className={this.state.inputClass} id={styles.inputStyles} type="password" name="password" placeholder="Password"/>
                                <div  id={styles.err} ><i style={{color:this.state.colorChanges}}>{this.state.err}</i></div>
                                <input className={this.state.submitClass} type="submit" value="submit" id={styles.inputStyles}/><br></br>   
                    
                             </form>
                         </div>
                          
                             <div id={styles.createNewSiteInfo}>
                                 <span id={styles.textfont}>Already hava an account?</span> <a id={styles.extraLink} href="/login">Log In</a><br></br>
                                 </div>  
                                          
                                
                         </div>
            </center>
            </div>

        </React.Fragment>;
    }
}
 
export default SignUp;