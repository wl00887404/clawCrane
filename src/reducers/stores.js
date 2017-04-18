
const stores = (state = [], action) => {
    switch (action.type) {
        case "receiveStores":
            return [
                ...state,
                ...action.stores
            ]
        default:
            return state
    }
}

export default stores
