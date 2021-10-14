import { fetchUserOwnedSets } from './ownedPartsActions' // Added

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
            dispatch(fetchUserOwnedSets()) // Added post registration and login
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
            dispatch(fetchUserOwnedSets()) // Added post registration and login
            history.push('/')
        })
    }
}

export const logOutUser = () => {
    const url = 'http://localhost:3001/logout'
    return (dispatch) => {
        const token = localStorage.getItem("token")
        const configObj = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        fetch(url, configObj)
        .then(resp => resp.json())
        .then(logoutStatus => {
            localStorage.removeItem("token")
            console.log(logoutStatus)
            dispatch(removeUser())
        })
    }
}

export const alreadyLoggedInCheck = (history) => {
    const url = 'http://localhost:3001/logged_in'
    return (dispatch) => {
        const token = localStorage.getItem("token")
        if (token){
            fetch(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(resp => {
                if (!resp.ok){
                    throw Error(resp.statusText)
                } else {
                    return resp.json()
                }
            })
            .then(userData => {
                if (!userData.error){
                    const loggedInUser = userData.data.attributes
                    dispatch(setUser(loggedInUser))
                    dispatch(fetchUserOwnedSets()) // Added post registration and login
                    history.push('/')
                }
            })
            .catch(error => console.log(error))
        }
    }
}