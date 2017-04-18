export const selectDate = (date) => {

    return (dispatch) => {
        dispatch({
            type: "selectDate",
            date
        })

    }
}
