const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'DEC':
            return state - 1;
        case "INC":
            return state + 1;
        case 'RND':
            return state = 0;
        default:
            return state;
    }
}

export default reducer;