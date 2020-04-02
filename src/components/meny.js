import React, {Component} from 'react';
import NavBar from 'react-responsive-menubar/lib/NavBar';
class meny extends Component {

    state = {showSideNav:false}

    handleSideNavToggle = ()=>{
        this.setState((currentState)=>{
            return {showSideNav: !currentState.showSideNav}
        })
    }

    render(){
        //Position of navbar container (header in this case) should be set torelative.
        return(
            <header className="header" style={{position:"relative"}}>
                <NavBar
                    handleSideNavToggle={this.handleSideNavToggle}
                    showSideNav={this.state.showSideNav}
                    logoStyles={{height:"65px", width:"85px"}}
                    navBarStyles={{boxShadow:"none"}}
                    linkStyles={{color:"black", fontWeight:"bold"}}>
                    <a href="/public/Hjem.html">Home Page</a>
                    <a href="" >Sample Link</a>
                    <a href="/">Sign in or join</a>

                </NavBar>
            </header>
        )
    }
}
export default meny;