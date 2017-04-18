const data = (state = [], action) => {
    switch (action.type) {
        case "receiveMachines":
            return state.map((store) => {
                return {
                    ...store,
                    machines: action.machines.filter((machine) => {
                        if (machine.storeId == store.storeId) {
                            return true
                        } else {
                            return false
                        }
                    }).map((machine) => {
                        return {
                            ...machine,
                            storeId: undefined
                        }
                    })
                }
            })
        default:
            return state
    }
}