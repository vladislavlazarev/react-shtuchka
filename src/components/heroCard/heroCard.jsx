import React, { Component } from 'react';
export default class HeroCard extends Component {
    render() {
        return (
              <div className="col-md-3">
                <div className="card">
                  <div className="card-title">{this.props.data.name}</div>
                  <div className="card-body">{this.props.data.description}</div>
                </div>
              </div>
        )
    }
}