const baseUrl = "http://localhost:3001/owned_sets"

export const addOwnedSets = (ownedSets) => ({type: 'ADD_OWNED_SETS', payload: ownedSets})

const addNewOwnedSet = (newOwnedSet) => ({type: 'ADD_NEW_OWNED_SET', payload: newOwnedSet})

const removeOwnedSet = (ownedSetId) => ({type: 'REMOVE_OWNED_SET', payload: ownedSetId})

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

export const createOwnedSetEntry = (legoSetId) => {
    return (dispatch) => {
        const token = localStorage.getItem("token")

        const configObj = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({legoSetId})
        }

        fetch(baseUrl, configObj)
        .then(resp => resp.json())
        .then(newOwnedSetData => {
            const newOwnedSet = newOwnedSetData.data.attributes
            dispatch(addNewOwnedSet(newOwnedSet))
        })
    }
}

export const destroyOwnedSetEntry = (ownedSetId) => {
    return (dispatch) => {
        const token = localStorage.getItem("token")

        const configObj = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        fetch(`${baseUrl}/${ownedSetId}`, configObj)
        .then(resp => resp.json())
        .then(data => { 
            console.log(data)
            dispatch(removeOwnedSet(ownedSetId))
        })

    }
}