
const user = (state = {}, action) => {
    switch (action.type) {
        case "receiveUser":
            return {
                ...state,
                ...action.user
            }
        default:
            return state
    }
}

export default user
