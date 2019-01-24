import React from 'react';

import './app-header.css';

const AppHeader = ({liked, allPosts, ending}) => {
    return (
        <div className="app-header d-flex">
            <h1>Sergey Khimochka</h1>
            <h2>{allPosts} запис{ending}, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;