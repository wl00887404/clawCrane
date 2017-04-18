const isFetching = (state = false, action) => {
    switch (action.type) {
        case "isFetching":
            return true
        case "catchError":
        case "cancelFetch":
        case "completeFetch":
            return false
        default:
            return state
    }
}

export default isFetching


// const items = (state = [], action) => {
//     switch (action.type) {
//         case "newFetchItem":
//             return [
//                 ...state, {
//                     name: action.item,
//                     finish: false
//                 }
//             ]
//         case "finishFetchItem":
//             return state.map((el) => {
//                 if (el.name == action.item) {
//                     return {
//                         ...el,
//                         finish: true
//                     }
//                 } else {
//                     return el
//                 }
//             })
//         case "completeFetch":
//             return {}
//         default:
//             return state
//     }
// }