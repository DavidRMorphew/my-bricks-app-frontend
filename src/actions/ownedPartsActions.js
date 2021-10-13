const baseUrl = "http://localhost:3001/owned_sets"

export const addOwnedSets = (ownedSets) => ({type: 'ADD_OWNED_SETS', payload: ownedSets})

// Add authorization header for current_user method on backend to work

export const fetchUserOwnedSets = () => {
    return (dispatch) => {
        fetch(baseUrl)
        .then(resp => resp.json())
        .then(ownedSetsData => {
            console.log(ownedSetsData)
            dispatch(addOwnedSets(ownedSetsData))
        })
    }
}