import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import RandomChar from '../randomChar';

export default class HomePage extends Component {

    state = {
        isEdit: false
    };

    
    onSwitch = () => {
        this.setState({
            isEdit: !this.state.isEdit,
        });
    }


    render() {        
        const {isEdit} = this.state;

        return (
            <Row>
                <Col lg={{size: 6, offset: 3}}>
                    { !isEdit ? <RandomChar/> : null}                          
                    <button 
                        onClick={this.onSwitch} 
                        className="button-hide d-flex justify-content-center">
                        { !isEdit ? 'Hide' : 'Show'} 
                    </button>
                </Col>
            </Row>
        )
    }
}