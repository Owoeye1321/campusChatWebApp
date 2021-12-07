import React, { Component } from 'react';
import styles from './newStyle.module.css'
class Friends extends Component {
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
                     <strong>Fullname</strong>
                     <p id={styles.reduceMargin}>Status</p>
                 </div>
                </div>
                <div className={styles.deptLevel}>
                     <p>Occupation</p>
                 
                 </div>
                 </div>
             </div>
        </React.Fragment>;
    }
}
 
export default Friends;