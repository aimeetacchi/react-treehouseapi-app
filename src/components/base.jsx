import React, { Component } from 'react';

export default class Base extends Component {


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
            .then(data => console.log(data))
            // catching err
            .catch(err => console.log(err.message))
    }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
