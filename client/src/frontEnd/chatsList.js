import React, { Component } from 'react';
import styles from './newStyle.module.css'
class ChatList extends Component {
    constructor(){
        super()
        this.state={
            iconsrc:"/img/user-icon.png"
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
                     <strong>Fullname</strong>
                     <p style={{marginTop:"-3px",fontSize:"13px"}}>Last Message</p>
                 </div>
                </div>
                <div className={styles.deptLevel}>               
                 <center><p style={{backgroundColor:"Lightgreen",borderRadius:"50%",width:"20px",marginTop:"2px"}}>!</p></center>
                     
                 
                 </div>
                 </div>
             </div>
        </React.Fragment>;
    }
}
 
export default ChatList;