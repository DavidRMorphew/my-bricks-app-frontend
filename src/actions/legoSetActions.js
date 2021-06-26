const baseUrl = "http://localhost:3001"

export const addSets = (sets) => ({type: 'ADD_SETS', payload: sets})

export const toggleOwned = (set) => ({type: 'TOGGLED_OWNED_VALUE', payload: set}) 

export const fetchLegoSets = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(`${baseUrl}/lego_sets`)
        .then(resp => resp.json())
        .then(data => {
            const sets = data.data.map(legoSet => legoSet.attributes) // Madeline Stark said this is OK.
            // dispatch({
            //     type: 'ADD_SETS', 
            //     payload: sets
            // })
            dispatch(addSets(sets))
            dispatch({type: 'LOADING_COMPLETE'})
        })
    }
}

export const addToOwnedSets = (id) => {
    return (dispatch) => {
    
        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(id)
        }

        fetch(`${baseUrl}/lego_sets/${id}`, configObj)
        .then(resp => resp.json())
        .then(data => {
            const set = data.data.attributes
            dispatch(toggleOwned(set))
        })
    }
}