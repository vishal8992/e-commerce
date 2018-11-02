export default function(state='', action) {
    switch(action.type) {
        case 'loginStatus':
            return action.loginUser;
    }
    return state
}