export const setUser = user => ({type: 'SET_USER', payload: user})

export const removeUser = () => ({type: 'REMOVE_USER'})

export const registerUser = (user, history) => {
    const url = 'http://localhost:3001/users'
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({user})
        }
        fetch(url, configObj)
        .then(resp => resp.json())
        .then(userData => {
            localStorage.setItem("token", userData.jwt)
            const newUser = userData.user.data.attributes
            dispatch(setUser(newUser))
            history.push('/')
        })
    }
}

export const logInUser = (user, history) => {
    return (dispatch) => {
        const url = 'http://localhost:3001/login'
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({user})
        }
        fetch(url, configObj)
        .then(resp => resp.json())
        .then(userData => {
            localStorage.setItem("token", userData.jwt)
            const loggedInUser = userData.user.data.attributes
            console.log(loggedInUser)
            dispatch(setUser(loggedInUser))
            history.push('/')
        })
    }
}

