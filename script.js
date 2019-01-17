'use strict';

let images = [
    'img/img_1.jpg',
    'img/img_2.jpg',
    'img/img_3.jpg',
    'img/img_4.jpg'
    ];
let imgPromises = images.map(getImage);
let sequence = Promise.resolve();
let container = document.getElementById('img');


function getImage(url){
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => {
            resolve(url);
        };
        img.onerror = () => {
            reject(url);
        };
        img.src = url;
    });
}

for (let value of imgPromises) {
    sequence = sequence.then( () => value)
    .then(url => {
        let img = document.createElement('img');
        img.src = url;        
        container.appendChild(img);
    })
    .catch(err => {
        console.error(err);
    })
}