const baseUrl = "http://localhost:3001"

export const fetchLegoSets = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        // dispatch({type: 'LOADING'})
        fetch(`${baseUrl}/lego_sets`)
        .then(resp => resp.json())
        .then(data => {
            const sets = data.data.map(legoSet => legoSet.attributes)
            dispatch({
                type: 'ADD_SETS', 
                payload: sets
            })
        dispatch({type: 'LOADING_COMPLETE'})
        })
    }
}