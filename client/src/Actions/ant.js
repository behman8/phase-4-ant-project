export const fetchAnts = async (dispatch) => {
    let resp = await fetch('/api/ants')
    if (resp.ok) {
        resp.json().then(ants => dispatch({type: "ADDING_ANTS", ants}))
    } else {
        resp.json().then(({errors}) => alert(errors))
    }
}