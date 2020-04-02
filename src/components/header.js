import React, {Component} from 'react';
import NavBar from "react-responsive-menubar/lib/NavBar";

class Header extends Component {
    state = {showSideNav:false}

    handleSideNavToggle = ()=>{
        this.setState((currentState)=>{
            return {showSideNav: !currentState.showSideNav}
        })
    }
    render() {
        return (
            <div>
                <header style={headerStyle}>
                    <h1 style={{fontStyle: 'italic'}}> Fitspo </h1>
                    <NavBar
                        handleSideNavToggle={this.handleSideNavToggle}
                        logo={'https://us.123rf.com/450wm/vectorplus/vectorplus1606/vectorplus160600510/58663755-dumbbell-vector-icon-white-illustration-isolated-on-black-background-for-graphic-and-web-design-.jpg?ver=6'}
                        showSideNav={this.state.showSideNav}
                        logoStyles={{height:"65px", width:"85px", position:'relative',left:'-10px'}}
                        navBarStyles={{boxShadow:"none"}}
                        linkStyles={{color:"white", fontWeight:"bold"}}>

                        <a href="/">Hjem</a>
                        <a href="/kalkulator">Kalkulator</a>
                        <a href="/">Sign in or join</a>

                    </NavBar>
                </header>
            </div>
        );
    }
}
const headerStyle = {
    background:"#333",
    color: '#ffff'
}
export default Header;