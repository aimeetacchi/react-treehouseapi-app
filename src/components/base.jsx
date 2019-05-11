import React, { Component } from 'react';

import Badges from './badges';

export default class Base extends Component {
constructor(props){
  super(props)
  this.state = {
    data: [],
    datareceived: false,
    err: ''
  }
}

    componentDidMount(){
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
            .then(data => this.setState({data, datareceived: true}))
            // catching err
            .catch(err => this.setState({err: err.message}))
    }

  render() {

    return (
      <div>
        {this.state.datareceived ?  <Badges badges={this.state.data.badges}/> : 'fetching data please wait....'}
       
       

        {/* <Badges>
          <h2>Hi there</h2>
        </Badges> */}
      </div>
    )
  }
}
