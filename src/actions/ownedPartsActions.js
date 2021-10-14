const baseUrl = "http://localhost:3001/owned_sets"

export const addOwnedSets = (ownedSets) => ({type: 'ADD_OWNED_SETS', payload: ownedSets})

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
            dispatch(addOwnedSets(ownedSets))
        })
    }
}