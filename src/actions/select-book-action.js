export function selectBookAction(book) {
    console.log(book)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

export function updateLoginStatus(loginStatus) {
    return {
        type: 'loginStatus',
        loginUser: loginStatus
    }
}