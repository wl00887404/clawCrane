let date = new Date("2017/2/17")
let machineNumber = 15
 
const randMachine = (i) => {
    return {
        id: i,
        storeId: Math.floor(Math.random() * 500) % 5,
        sellingPrice: Math.floor(Math.random() * 500) % 10 * 10,
        productionId:i
    }
}

const randIncome = (date) => {
    date.setHours(Math.floor(Math.random() * 500) % 24)
    date.setMinutes(Math.floor(Math.random() * 500) % 60)
    date.setSeconds(Math.floor(Math.random() * 888) % 60)
    let machineId = Math.floor(Math.random() * 888) % machineNumber
    return {
        date,
        machineId
    }
}

const randTakenDoll = (date) => {
    date.setHours(Math.floor(Math.random() * 500) % 24)
    date.setMinutes(Math.floor(Math.random() * 500) % 60)
    date.setSeconds(Math.floor(Math.random() * 888) % 60)
    let machineId = Math.floor(Math.random() * 888) % machineNumber
        //let sellingPrice = machineList[machineId].sellingPrice
    return {
        date,
        //sellingPrice,
        machineId
    }
}

const randError = (date) => {
    date.setHours(Math.floor(Math.random() * 500) % 24)
    date.setMinutes(Math.floor(Math.random() * 500) % 60)
    date.setSeconds(Math.floor(Math.random() * 888) % 60)
    let code = Math.floor(Math.random() * 500) % 100
    let machineId = Math.floor(Math.random() * 888) % machineNumber
    return {
        date,
        code,
        machineId
    }
}

const getMachine = (length) => {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(randMachine(i))
    }
    return arr
}

const getIncome = (date, length) => {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(randIncome(date))
    }
    return arr
}

const getTakenDoll = (date, length) => {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(randTakenDoll(date))
    }
    return arr
}


const getError = (date, length) => {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(randError(date))
    }
    return arr
}

/**
 *  上面都是function
 **/

let stores = [{
    name: "中正大學店",
    address: "621嘉義縣民雄鄉大學路一段168號",
    gpsX: 23.558246,
    gpsY: 120.471741,
    storeId: 0,

}, {
    name: "神農五街店",
    address: "嘉義縣民雄鄉神農五街29號",
    gpsX: 23.553980,
    gpsY: 120.470729,
    storeId: 1,

}, {
    name: "隱客廳店",
    address: "嘉義縣民雄鄉裕農路181號",
    gpsX: 23.557619,
    gpsY: 120.469785,
    storeId: 2,

}, {
    name: "旺萊山鳳梨店",
    address: "嘉義縣民雄鄉三興村陳厝寮1-3號",
    gpsX: 23.553045,
    gpsY: 120.480395,
    storeId: 3,

}, {
    name: "我家",
    address: "台中市西區民權路213巷16號4樓之4室",
    gpsX: "24.147447",
    gpsY: "120.668326",
    storeId: 4,

}]

let user = {
    account: 'admin',
    password: 'admin',
    name: '何振志',
    phone: '0932639083',
    email: 'wl00887404@gmail.com'
}




let machines = getMachine(machineNumber)

let income = getIncome(date, 100)/*.groupBy(
    (el) => {
        return el.machineId
    },
    (el) => {
        delete el.machineId
        return el
    }
)*/

let takenDoll = getTakenDoll(date, 100)/*.groupBy(
    (el) => {
        return el.machineId
    },
    (el) => {
        delete el.machineId
        return el
    }
)*/

let error = getError(date, 10)/*.groupBy(
    (el) => {
        return el.machineId
    },
    (el) => {
        delete el.machineId
        return el
    }
)*/


machines = machines
    .map((machine, index) => {
        return {
            ...machine,
            /*income: income[index] || [],
            takenDoll: takenDoll[index] || [],
            error: error[index] || []*/
        }
    })
    /*.groupBy(
        (el) => {
            return el.storeId
        },
        (el) => {
            delete el.storeId
            return el
        }
    )*/


stores = stores.map((store, index) => {
    return {
        ...store,
        machines: machines[index] || []
    }
})


let data = {
    user,
    stores,
    /*income,
    takenDoll,
    error*/
}

/* console.log(machineList.groupBy(
*     (el) => {
*         return el.storeId
*     },
*     (el) => {
*       return el
*   }
* ))
*/
//console.log(machineList[0])

/*
 *  console.log(income)
 *  console.log(takenDoll)
 */
module.exports = data
