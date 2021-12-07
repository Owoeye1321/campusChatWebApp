import React, { Component } from 'react';
import styles from './newStyle.module.css'
class TweetingDiv extends Component {

    constructor(){
        super()
        this.state={
            iconsrc:"/img/user-icon.png",
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
                     
                 </div>
                </div>
                <div className={styles.deptLevel}>
                 <p>Occupation</p>                 
                 </div>
                 </div>
                
                 <div className={styles.post}>
                     <h1>Post Here</h1>
                      
                 </div>
                 <div className={styles.head}>
                <div className={styles.imgNametitle}>
                <div className={styles.FloatLeft}> 
                <p>Count</p>                  
                 </div>
               
                </div>
                <div className={styles.deptLevel}>                
                     <p>like Icons</p>
                 
                 </div>
                 </div>
            </div>
           
            
            
        </React.Fragment>;
    }
}
 
export default TweetingDiv;