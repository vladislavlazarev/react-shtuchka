import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import HeroList from './components/heroList/heroList.jsx';
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
            <HeroList heroes={this.state.heroes}/>
        </>
    )
  }
}

export default App;
