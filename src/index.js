import {createStore} from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'DEC':
            return state + 1;
        case "INC":
            return state - 1;
        case 'RND':
            return state = 0;
        default:
            return state;
    }
}
const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = () => ({type: 'RND'});

const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc())
});
document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec())
});
document.getElementById('rnd').addEventListener('click', () => {
    store.dispatch(rnd())
});

const update = () => {
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);

// const getResource = async () => {
//     const res = await fetch(process.env.PUBLIC_URL + './db.json'),
//         base = await res.json();
//     return base;
// }

// setTimeout(() => {
    // let myShows = Base.numbers.filter(item => item.const);
    // return myShows;
// }, 1000);
// console.log(myShows);
// function upload(myShows) {
//     let randomValue = myShows[Math.floor(Math.random() * myShows.length)];
//     console.log(randomValue.const);
//     return randomValue;
// }
// document.getElementById('down').addEventListener('click', () => {
//     // document.getElementById('counter').textContent = randomValue.const;
//     console.log(upload());
// });

