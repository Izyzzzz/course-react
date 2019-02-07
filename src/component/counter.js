import React, {Component} from 'react';
import {connect} from 'react-redux';
// import * as actions from '../actions';

class Counter extends Component {
    addNews() {
        // console.log('addNews', this.newsInput.value);
        this.props.onAddNews(this.newsInput.value);
        this.newsInput.value = '';
    }
    render() {
        // console.log(this.props.testStore);
        return (
            <div className="block">
                <ul className="listItems">
                    {this.props.testStore.map((news, index) => 
                        <li key={index}>{news.name}</li>
                    )}
                </ul><br/>
                <input type="text" className="newsInput" ref={(input) =>{this.newsInput = input}}/><br/>
                <button className="hide">Hide completed</button>
                <button onClick={this.addNews.bind(this)} className="addNew">Add new</button>
            </div>
        )
    }
    // return (
    //     <div className="block">
    //         <ul className="listItems">
    //             {counter}
    //         </ul><br/>
    //         <input type="text" className="textInput" ref/><br/>
    //         <button className="hide">Hide completed</button>
    //         <button onClick={add} className="addNew">Add new</button>
    //     </div>
    // );
}
export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddNews: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            }
            dispatch({ type: 'ADD_NEWS', payload});
        }
    })
)(Counter);

// const mapStateToProps = (state) => {
//     return {
//         counter: state
//     }
// }
// // const mapDispatchToProps = (dispatch) => {
// //     return bindActionCreators(actions, dispatch);
// // }
// export default connect(mapStateToProps, actions)(Counter);