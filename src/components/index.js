import React, { Component } from 'react';

import getService from '../services/getService'



export default class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newBase: null
        };
    }

    async getBase(){
        const all = new getService();
        
        const allBase = await all.getResource()
            .then(res => { return res;
                // console.log(res));
                // this.setState( {newBase : res});
            })
        return allBase;
    }    
    
    render() {
        // this.getBase();
        const ret = this.getBase();
        console.log(ret);
        console.log(this.state.newBase);
      return (
        <div>
            {/* {this.state.newBase} */}
        </div>
      );
    }
  }