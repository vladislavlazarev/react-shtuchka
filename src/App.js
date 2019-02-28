import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import { Route } from "react-router-dom";
import HeroList from './components/heroList/heroList.jsx';
import Settings from './components/Settings/Settings.jsx';
import AddHero from './components/AddHero/AddHero.jsx';
class App extends Component {
    constructor() {
        super();
        this.state = {
            appName:'Hero Book',
            heroes:[
                {
                    name: 'Thor',
                    description: 'God of party'
                },
                {
                  name: 'Jimbo',
                  description: 'Starcraft nerd'
                },
                {
                  name: 'Jimbo',
                  description: 'Starcraft nerd'
                }
            ]
        }
    }


  render() {
    return (
        <>
            <Navbar appName={this.state.appName}/>
            <Route exact path='/'
              render={(props) => <HeroList heroes={this.state.heroes}/>}/>

            <Route path="/addHero" component={AddHero}/>
            <Route path="/settings" component={Settings}/>
        </>
    )
  }
}

export default App;
