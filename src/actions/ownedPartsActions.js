const baseUrl = "http://localhost:3001/owned_sets"

export const addOwnedSets = (ownedSets) => ({type: 'ADD_OWNED_SETS', payload: ownedSets})

// Add authorization header for current_user method on backend to work

export const fetchUserOwnedSets = () => {
    console.log("fetch owned sets")
    return (dispatch) => {
        const token = localStorage.getItem("token")
        fetch(baseUrl, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
        })
        .then(resp => resp.json())
        .then(ownedSetsData => {
            const ownedSets = ownedSetsData.data.map(ownedSet => ownedSet.attributes)
            console.log(ownedSets)
            dispatch(addOwnedSets(ownedSets))
        })
    }
}