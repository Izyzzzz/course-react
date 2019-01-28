import React, { Component } from 'react';
import styled from 'styled-components';

import getService from '../services/getService'


const Block =styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 500px;
    margin: 30px auto;
    box-shadow: 0px 0px 15px 10px #999;
`
const ItemImg = styled.div`
    grid-column-start: 2; 
    grid-column-end: 3; 
    grid-row-start: 1; 
    grid-row-end: 4;
    img {
        width: 100%;
    }
    
`
const ItemText = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
`
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
                        <Block key={item.name}>
                            <ItemText>Name: {item.name}</ItemText>
                            <ItemText>Category: {(item.fruit_category) ? [item.fruit_category] : [item.vegetable_category]}</ItemText>
                            <ItemText>Country: {item.country}</ItemText>
                            <ItemImg><img src={item.img_url} alt=""/></ItemImg>
                        </Block>
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

  