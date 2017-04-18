import data from '../testData.js'

const receiveIncome = (income, date) => {
    return {
        type: "receiveIncome",
        date,
        income
    }
}
const receiveTakenDoll = (takenDoll, date) => {
    return {
        type: "receiveTakenDoll",
        date,
        takenDoll
    }
}

const receiveErrorLogs = (errorLogs, date) => {
        return {
            type: "errorLogs",
            errorLogs,
            date
        }
    }
    /*
    export const fetchAuth=()=>{
        return(dispatch,getState)=>{
            dispatch(receiveAuth("dev"))
        }
    }
    export const fetchInfo=()=>{
        return (dispatch, getState) => {
            dispatch(receiveUser(data.user))
            dispatch(receiveMachines(data.machineList))
            dispatch(receiveStores(data.storeList))
        }
    }*/
export const fetchData = (date) => {
    return (dispatch, getState) => {
        Promise.all([new Promise((resolve, reject) => {
                //dispatch(receiveIncome(data.income(new Date(), 10000)))
                resolve(data.income(new Date(), 10000))
            }),
            new Promise((resolve, reject) => {
                //dispatch(receiveTakenDoll(data.takenDoll(new Date(), 2000))
                resolve(data.takenDoll(new Date(), 2000))                
            })
        ]).then((value) => {
            
        })

    }
}
