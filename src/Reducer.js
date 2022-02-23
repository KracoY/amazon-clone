export const initialState = {
    basket: [],
}

function reducer(state, action){
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //logic for adding item to your basket
            break;
        case 'REMOVE_FROM_BASKET':
            //Logic for removing an item
            break;
        default:
            return state;

    }
}

export default reducer