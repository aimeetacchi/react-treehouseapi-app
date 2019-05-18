import React, { Component } from 'react'

export default class Points extends Component {
  render() {
    const {total, HTML, CSS, Design, JavaScript, WordPress, APIs } = this.props.points;
    return (
       
      <div className="points-container">
        <h2 onClick={() => this.props.toogle('showPoints')}>Points {this.props.showPoints ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>  }</h2>
        
        <ul className={"points-list " + (this.props.showPoints ? 'toogleon' : 'toogleoff')}>
            <li>Total Points: {total}</li>
            <li> HTML: {HTML} </li>
            <li> CSS: {CSS} </li>
            <li> JavaScript: {JavaScript} </li>
            <li> APIs: {APIs} </li>
            <li> Design: {Design} </li>
            <li> WordPress: {WordPress} </li>
        </ul>
      </div>
    )
  }
}
