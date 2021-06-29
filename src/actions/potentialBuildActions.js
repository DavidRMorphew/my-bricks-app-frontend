const baseUrl = "http://localhost:3001/lego_sets/potential_builds"

export const addPotentialBuilds = (searchResults) => ({type: 'ADD_POTENTIAL_BUILDS', payload: searchResults})

export const fetchPotentialBuilds = (strictParam) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(`${baseUrl}/${strictParam}`)
        .then(resp => resp.json())
        .then(data => {
            const searchResults = data.data.map(potBuildSet => potBuildSet.attributes)
            dispatch(addPotentialBuilds(searchResults))
            dispatch({type: 'LOADING_COMPLETE'})
        })
    }
}
