const baseUrl = "http://localhost:3001/lego_sets"

export const addSetPartSpecs = (setPartSpecs) => ({type: 'ADD_SET_PART_SPECS', payload: setPartSpecs})

export const fetchSetPartSpecs = (setId) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(`${baseUrl}/${setId}/set_part_specs`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })

        dispatch({type: 'LOADING_COMPLETE'})
    }
}