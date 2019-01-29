import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

import './app.css';

export default class App extends Component {   
    
    
    state = {
        isEdit: false,
        selectedChar: 130
    };

    onSwitch = () => {
        this.setState({
            isEdit: !this.state.isEdit,
        });
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }
    
    render() {
        const {isEdit} = this.state;
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            { !isEdit ? <RandomChar/> : null}                          
                            <button 
                                onClick={this.onSwitch} 
                                className="button-hide d-flex justify-content-center">
                                { !isEdit ? 'Hide' : 'Show'} 
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
