import React, { Component } from 'react';
import styles from './newStyle.module.css'
import NavExtension from './navExt';
import { BrowserRouter as Link } from 'react-router-dom';
import NavigationBar from './navigation';
import ChatList from './chatsList';
class CampusChats extends Component {
    constructor(){
        super()
        this.state={
            container:"container",
            row:"row",
            colOne:"col-sm-12 col-md-8 col-lg-8",
            colTwo:"col-sm-12 col-md-4 col-lg-4",
            bgligth:"bg-light rounded border-top my-4 py-3 px-2",
            height:"120px"
        }
    }
    render() { 
        return <React.Fragment>
            <NavigationBar/>
            <div className={this.state.container} style={{marginTop:this.state.height}}>
            <div className ={this.state.row}>
                <div className={this.state.colOne}>
                <div  className={this.state.bgligth} id={styles.contentDiv} >
                  <ChatList/>
                  <Link to="/mainChat"></Link>
                    </div> 
                </div>
                <div className={this.state.colTwo}>
                   <NavExtension bgligth={this.state.bgligth}/>
                </div>

            </div>
        </div>
        </React.Fragment>;
    }
}
 
export default CampusChats;