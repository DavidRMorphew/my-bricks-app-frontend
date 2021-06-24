const baseUrl = "http://localhost:3001"

export const fetchLegoSets = () => {
    return (dispatch) => {
        fetch(`${baseUrl}/lego_sets`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}