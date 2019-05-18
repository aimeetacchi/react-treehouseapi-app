import React, { Component } from 'react'

export default class Badges extends Component {



  render(props) {

    let badges = this.props.badges.map((badge, i) => {
        return <li style={{listStyle: 'none', padding: '10px 0'}} key={i}>{badge.name} - <br/><small style={{fontSize: '12px'}}>{badge.earned_date}</small></li>;
        })

    return (
      <div className="badges-container">
        <h2 onClick={() => {this.props.toogle('showBadges')} }>Badges {this.props.showBadges ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>  } </h2>
        {/* {this.props.children} */}

        <ul className={"badges-list " + (this.props.showBadges ? 'toogleon' : 'toogleoff')}>
           {badges}
        </ul>
      </div>
    )
  }
}
