export function updateLoginStatus(loginStatus) {
    return {
        type: 'loginStatus',
        loginUser: loginStatus
    }
}