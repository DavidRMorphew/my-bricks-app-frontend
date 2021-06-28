const baseUrl = "http://localhost:3001/lego_sets"

export const addParts = (parts) => ({type: 'ADD_PARTS', payload: parts})

export const fetchPartsOfSet = (setId) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(`${baseUrl}/${setId}/parts`)
        .then(resp => resp.json())
        .then(data => {
            const parts = data.data.map(part => part.attributes)
            dispatch(addParts(parts))
            dispatch({type: 'LOADING_COMPLETE'})
        })

    }
}