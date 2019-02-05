import {createStore} from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'DEC':
            return state + 1;
        case "INC":
            return state - 1;
        case 'RND':
            return state = 0;
        case 'DOWN':
            return Number.parseInt(action.value);
        default:
            return state;
    }
}
const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = () => ({type: 'RND'});
const down = (value) => ({type: 'DOWN', value});

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

const getResource = async () => {
    const res = await fetch(process.env.PUBLIC_URL + './db.json'),
        base = await res.json();
    return base;
}

document.getElementById('down').addEventListener('click', () => {
    getResource()
     .then(res => {
         let baseFilter = res.numbers.filter(item => item.const);
         let randomValue = baseFilter[Math.floor(Math.random() * baseFilter.length)];
         store.dispatch(down(randomValue.const));
     });
    
});


document.getElementById('up').addEventListener('click', () => {
        let uploadNum = document.getElementById('counter').innerHTML;
        let uploadOb  = {saved: uploadNum};
        postResource("http://localhost:3001/numbers", uploadOb);
});
const postResource = async (url, body) => {
    const res = await fetch(url,
    {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }

    });
    
    if (!res.ok) {
        throw new Error(`status: ${res.status}`)
    }
    return await res.json();

}
