import React, { Component } from 'react'

export default class Badges extends Component {



  render(props) {

    let badges = this.props.badges.map((badge, i) => {
        return <li style={{listStyle: 'none', padding: '10px 0'}} key={i}>{badge.name} - {badge.earned_date}</li>;
        })

    return (
      <div>
        <h2>Badges Component</h2>
        {/* {this.props.children} */}

        <ul>
           {badges}
        </ul>
      </div>
    )
  }
}
