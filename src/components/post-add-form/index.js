import React, {Component} from 'react';
import styled from 'styled-components';

import './post-add-form.css';

const BottomPanel = styled.form`
    display: flex;
    margin-top: 20px;
`

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    onValueChange = (e) =>{
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text.length !== 0) {
            this.props.onAdd(this.state.text);
            this.setState({
                text: ''
            });
        }        
    }

    render() {
        return (
            <BottomPanel
                onSubmit={this.onSubmit}>
                <input
                    text="text"
                    placeholder="О чем вы думаете сейчас"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить
                    </button>
            </BottomPanel>
        )
    }
    
}
