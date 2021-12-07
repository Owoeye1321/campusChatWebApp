import React, { Component } from 'react';
import styles from './newStyle.module.css'
class News extends Component {
    render() { 
        return <React.Fragment>
             <div id={styles.mainContainer}>
             <div className={styles.postNews}>
                     <h1>News Here</h1>
                      
                 </div>
             </div>
        </React.Fragment>;
    }
}
 
export default News;