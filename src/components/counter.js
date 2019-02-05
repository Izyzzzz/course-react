import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
// import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="block">
            <div className="block-number">{counter}</div>
            <button onClick={inc} className="block-plus">
                <img src="./img/plus.png" alt="plus"/>
            </button>
            <button onClick={dec} className="block-minus">
                <img src="./img/minus.png" alt="minus"/>
            </button>
            <button onClick={rnd} className="block-reset">
                <img src="./img/reset.png" alt="reset"/>
            </button>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);
// }
export default connect(mapStateToProps, actions)(Counter);