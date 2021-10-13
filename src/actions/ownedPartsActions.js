const baseUrl = "http://localhost:3001/lego_sets/owned_sets"

export const addOwnedSets = (ownedSets) => ({type: 'ADD_OWNED_SETS', payload: ownedSets})

export const fetchUserOwnedSets = () => {
    return (dispatch) => {
        fetch(baseUrl)
        .then(resp => resp.json())
        .then(ownedSetsData => {
            console.log(ownedSetsData)
        })
    }
}