import React, { Component } from 'react';
import HeroCard from '../heroCard/heroCard';
export default class HeroList extends Component {
    render() {
      const Heroes = this.props.heroes.map((hero, i) => {
        return <HeroCard key={i} data={hero}/>
      });

      return (
        <>
          <h1>Список героев</h1>
          <div className='container row'>
            {Heroes}
          </div>
        </>
      )
    }
}