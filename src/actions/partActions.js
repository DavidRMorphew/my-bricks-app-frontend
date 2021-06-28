const baseUrl = "http://localhost:3001/lego_sets"

export const fetchPartsOfSet = (setId) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(`${baseUrl}/${setId}/parts`)
        .then(resp => resp.json())
        .then(data => {
            const parts = data.data.map(part => part.attributes)
            console.log(parts)
        })

        dispatch({type: 'LOADING_COMPLETE'})
    }
}