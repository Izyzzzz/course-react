import React from 'react';

const Counter = (counter, inc, dec, rnd) => {
    return (
        <div className="block">
            <div className="block-number">{counter}</div>
            <button onClick={dec} className="block-plus">
                <img src="./img/plus.png" alt="plus"/>
            </button>
            <button onClick={inc} className="block-minus">
                <img src="./img/minus.png" alt="minus"/>
            </button>
            <button onClick={rnd} className="block-reset">
                <img src="./img/reset.png" alt="reset"/>
            </button>
        </div>
    );
}

export default Counter;