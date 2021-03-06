import { fetchSetPartSpecs } from "./setPartSpecsActions"

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
            dispatch(fetchSetPartSpecs(setId))
            // dispatch({type: 'LOADING_COMPLETE'}) // Removed to avoid problems of rendering in PartCards before parts and specs are added to store 
        })

    }
}