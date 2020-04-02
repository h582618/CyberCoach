import React, {Component} from 'react';
import './App.css';
import Header from "./components/header";
import Spec from "./components/spec";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Hjem from "./components/Hjem";
import Error from "./components/Error";

class App extends Component {
    state = {
        vekt: 'vekt',
        høyde: 'høyde',
        kjønn: true,
    }


    render() {
        return (
            <div className="App">
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/kalkulator" component={Spec} exact />
                        <Route path="/" component={Hjem} exact/>
                        <Route component={Error} />
                    </Switch>

                </BrowserRouter>


            </div>
        );
    }
}

export default App;
