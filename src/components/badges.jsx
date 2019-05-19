import React, { Component } from 'react'

export default class Badges extends Component {



  render() {
    // console.log(this.props.badges);
    let badges = this.props.badges.map((badge, i) => {
      return <section style={{ listStyle: 'none' }} key={i}>{badge.name} - <br />
        <img className="badgeIcon" src={badge.icon_url} alt="badge icon" />
        <small style={{ fontSize: '12px' }}>{badge.earned_date}</small></section>;
    })

    return (
      <div className="badges-container">
        <h2 onClick={() => { this.props.toogle('showBadges') }}>Badges {this.props.showBadges ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>} </h2>
        {/* {this.props.children} */}

        <div className={"badges-list " + (this.props.showBadges ? 'toogleon' : 'toogleoff')}>
          {badges}
        </div>
      </div>
    )
  }
}
