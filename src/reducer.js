const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NEWS':
            return [
                ...state,
                action.payload
            ];
        case "DELETE_NEWS":
            return state = [];
        default:
            return state;
    }
}

export default reducer;