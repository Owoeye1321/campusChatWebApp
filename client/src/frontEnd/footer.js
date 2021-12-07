import React, { Component } from 'react';
import styles from './newStyle.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
class Footer extends Component {
    constructor(props){
        super(props)
        this.state={
          container:"container-fluid",
          row:"row py-5 my-5 border-top",
          sepDiv:"col-sm-12 col-md-3 col-lg-2 my-4  py-1",          
          imgsrc:"/img/chat-icon.png",  
          muteText:"text-muted",
          colDiv:"col-sm-12 col-md-3 col-lg-3",
          niceDiv:"bg-light rounded border-top px-2 my-4 py-3",
          flex:"nav flex-column",
          navMb:"nav-item mb-2",
          one:"A user is required to provide requested data to create a full profile in the campus chat,hence disobidient to do so might cause an inactivation of individual account.",
          two:"Campus chat is a platform for individuals or team in a community to interract and spamming of an account could cause inactivation",
          three:"Your data security is our concern and it wouldnt be jeopardized,we really care about your data security most especially.",
          four:"Please ensure that your administrative logs are not disclosed to a third party,your administrative logs is the most important key and access to your activity on here."
        }
    }
    render() { 
        return <React.Fragment>
                <div className={this.state.container}>
  <footer className={this.state.row}>
    <div className={this.state.sepDiv}>
    <img className={styles.equalImgDimention} alt="" src={this.state.imgsrc}/>
      <span className={this.state.muteText}>&copy; 2021</span>
    </div>
   


    <div className={this.state.colDiv}>
    <div className ={this.state.niceDiv} style={{color:this.props.navColor}}> 
      <h5 >Terms</h5>
      <ul className={this.state.flex}>
        <li className={this.state.navMb}>
            <span>{this.state.one}</span>  
             <span>{this.state.two}</span>                  
        </li>
      </ul>
      </div>
    </div>

    <div className={this.state.colDiv}>
    <div className ={this.state.niceDiv} style={{color:this.props.navColor}}> 
      <h5>Privacy</h5>
      <ul className={this.state.flex}>
        <li className={this.state.navMb}>
           <span>{this.state.three}</span>
		<span>{this.state.four}</span>                       
        </li>
      </ul>
      </div>
    </div>

    <div className={this.state.colDiv}>
    <div className ={this.state.niceDiv} style={{color:this.props.navColor}}> 
    <h5>Contact Developer</h5>
      <ul className={this.state.flex}>
        <li className={this.state.navMb}>
            <p>Email: Owoeye1321@gmail.com</p>
             <p>Phone: 09153464158</p>
               <p >Github.com/Owoeye1321</p>
             <p >Linkedin.com/in/OwoeyeSamuel</p>
               </li>
      </ul>
      </div>
    </div>
  </footer>
</div>

                
                
        </React.Fragment>;
    }
}
 
export default Footer;