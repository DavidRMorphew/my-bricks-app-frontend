const baseUrl = "http://localhost:3001"

export const fetchSetPartSpecs = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        

        dispatch({type: 'LOADING_COMPLETE'})
    }
}