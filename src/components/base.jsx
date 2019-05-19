import React, { Component } from 'react';

import Badges from './badges';
import Points from './points';

export default class Base extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      datareceived: false,
      err: '',
      showBadges: false,
      showPoints: false,
    }
  }

  componentDidMount() {
    console.log('component did mount');
    async function fetchAsync() {
      // fetching the data at the url storing in res
      let res = await fetch('https://teamtreehouse.com/aimeet84.json');
      // turning the res into json.
      let data = await res.json();

      return data;
    }

    // calling the funciton to fetch data.
    fetchAsync()
      // catching the response
      .then(data => this.setState({ data, datareceived: true }))
      // catching err
      .catch(err => this.setState({ err: err.message }))
  }


  // Toogle Function
  toogle = (type) => {
    console.log('clicking');
    this.setState({ [type]: !this.state[type] });
  }

  render() {
    return (
      <div className="data">

        {this.state.datareceived ?

          <React.Fragment>
            <div className="username">
              <img style={{ width: '200px', borderRadius: '100px', margin: '0 auto', display: 'block' }} src={this.state.data.gravatar_url} alt="logo" />
              <strong>Username:</strong> {this.state.data.name}
            </div>



            {/* BADGES COMPONENT */}
            <Badges showBadges={this.state.showBadges} badges={this.state.data.badges} toogle={this.toogle} />

            {/* POINTS COMPONENT */}
            <Points showPoints={this.state.showPoints} points={this.state.data.points} toogle={this.toogle} />

          </React.Fragment>
          : <div><p>fetching data please wait....</p></div>}

      </div>
    )
  }
}
