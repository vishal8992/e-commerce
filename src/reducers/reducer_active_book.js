export default function(state=null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            //return Object.assign(...state,action.payload);
            return action.payload;
    }
    return state
}