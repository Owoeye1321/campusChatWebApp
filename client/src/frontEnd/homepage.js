import React, { Component } from 'react';
import styles from './newStyle.module.css'
import Footer from './footer';
class HomePage extends Component {
  constructor(props){
    super(props)
    this.state={      
      Hclass:"fs-4 ", 
      mainClass:"my-5 ",
      imgSrc:"/img/chat-icon.png",
      pClass:"fs-5 col-md-8",
      FirstClassaName:"col-lg-12  p-3 py-md-5 text-center text-white ",
      SecondClassName:"d-flex align-items-center py-4 mb-5 ",
      logInLink:"btn btn-primary btn-lg px-4",
      navColor:"black",
      hrLine:"col-3 col-md-2 mb-5 mt-5",
      content:"Quickly and easily get started with Campus chat, Campus chat is a platform for individuals or team in a community to interract,we really care about your data security most especially"

      }

    }
  
    render() { 
        return <React.Fragment>           


<div className={this.state.FirstClassaName} id={styles.homebg}>
  <header className={this.state.SecondClassName}> 
  <div class=" 5s animated bounce fadeInRight">   
       <h1 className={this.state.Hclass} id={styles.GeneralColoredText}>
    <img className={styles.equalImgDimention} alt="" src={this.state.imgSrc}/>Campus Chat</h1>
    </div>
   
  </header>

  <main className={this.state.mainClass}>
  <div class=" 5s animated bounce zoomInDown">
    <h2 style ={{color:"white"}}>Get started with Campus Chat</h2>
    <center>
    <p className={this.state.pClass} style ={{color:"white"}}>{this.state.content}.</p>

  <div className={this.state.mainClass}> 
   <button className={this.state.logInLink}><a style={{color:"white"}} id={styles.extraLink} href="/login" >LogIn</a></button>  
      
    </div>
   
    <hr className={this.state.hrLine}></hr>

    
    </center>
    </div>
  </main>
  <div class=" 5s animated bounce fadeInLeft">
  <Footer navColor={this.state.navColor}/>
  </div>
  <div class=" 5s animated bounce fadeInRight">
  <footer >
    Created by CyberXurde &middot; &copy; 2021
  </footer>
  </div>
</div>

        </React.Fragment>;
    
}
}
export default HomePage;