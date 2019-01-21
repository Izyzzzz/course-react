import React from 'react';


import './post-list-item.css';
class DateComponent extends React.Component {
    constructor() {
        super();
        let today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date
        };
    }
    render() {
        return (
            <div className='date d-flex justify-content-center align-items-center'>
                {this.state.date}
            </div>
        );
    }
}

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Hello World!
            </span>
            <DateComponent/>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                    type="button" 
                    className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button 
                    type="button" 
                    className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )

}

export default PostListItem;