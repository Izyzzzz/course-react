import React, { Component } from 'react';

import getService from '../services/getService'
export default class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newBase: null
        };
    }

    componentDidMount(){
        new getService().getResource()
        .then(res => { 
            this.setState( () => {
                return{
                    newBase: res
                }
            });
        })
    }

    // newBase = () => {
    //     if (this.state.newBase) {
        
    //         const elements = this.state.newBase.map((item) => {
    //             return (
    //                 <li >
    //                     {item.name}
    //                 </li>
    //             )
    //         });
    //         return elements;
            
    //         }
    // }

    render() {
               
                
      return (
        <div>
            {this.state.newBase ?
                this.state.newBase.fruits[0].name : 'No'
            }
        </div>
      );
    }
  }

  