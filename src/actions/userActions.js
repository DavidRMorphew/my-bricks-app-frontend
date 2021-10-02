export const setUser = user => ({type: 'SET_USER', payload: user})

export const registerUser = user => {
    const url = 'http://localhost:3001/users'
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(user)
        }
        fetch(url, configObj)
        .then(resp => resp.json())
        .then(userData => {
            console.log(userData)
            dispatch(setUser(userData))
        })
    }
}