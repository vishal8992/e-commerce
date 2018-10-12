export default function(state=null, action) {
    switch(action.type) {
        case 'loginStatus':
            //return Object.assign(...state,action.payload);
            return action.loginUser;
    }
    return state
}