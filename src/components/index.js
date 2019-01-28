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

    newBase = () => {
        let elements = [];
        if (this.state.newBase) {
            for (let key in this.state.newBase) {
                const items = this.state.newBase[key].map((item) => {
                    return (
                        <div key={item.name}>
                            <p>{item.name}</p>
                            <p>{item.fruit_category}</p>
                            <p>{item.country}</p>
                            <img src={item.img_url} alt=""/>
                        </div>
                    )
                });              
                elements.push(items);
                }
            }
            return elements;
    }

    render() {
               
                
      return (
        <div>
            {this.newBase()}
        </div>
      );
    }
  }

  