import React, { Component } from 'react';
import styles from './newStyle.module.css'
class ChatField extends Component {
    constructor(){
        super()
        this.state={
            inputClass:"form-control" ,
            iconsrc:"/img/user-icon.png",
            sendsrc:"/img/chat-icon.png",
            text:"text",
            placeholder:"Type a message"
            }
    }
    render() { 
        return <React.Fragment>
             <div id={styles.mainContainer}>
                <div className={styles.head}>
                <div className={styles.imgNametitle}>
                <div className={styles.FloatLeft}> 
                    <img id={styles.imgIcon} alt="" src={this.state.iconsrc}/>                   
                 </div>
                 <div className={styles.FloatRight}> 
                     <p>Fullname</p>
                     <p id={styles.reduceMargin}>Occupation</p>
                 </div>
                </div>
                <div className={styles.deptLevel}>
                 <span>Call{"\t"}</span>
                     <span>Video call</span>
                 
                 </div>
                 </div>
                
                 <div className={styles.msgDiv}>
                     <h1>Chat Here</h1>
                      
                 </div>
                 <form>
                <div>                     
                     <input required className={this.state.inputClass} id={styles.msg} type={this.state.text} name="msg" placeholder={this.state.placeholder}/>
                </div>
                <div className={styles.sendMsg}>                
                <img id={styles.imgIcon} alt="" src={this.state.sendsrc}/>           
                </div>
                </form>
            </div>
           
        </React.Fragment>
    }
}
 
export default ChatField;