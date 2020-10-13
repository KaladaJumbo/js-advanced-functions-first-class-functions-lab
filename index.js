// Code your solution in this file!

const returnFirstTwoDrivers = (arr) => {
    return [arr[0], arr[1]]
}

const returnLastTwoDrivers = (arr) => {
    return [arr[arr.length - 2], arr[arr.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(params) {
    
    return (fare) => {
        return params * fare
    }

}

function fareDoubler(fare) {
    
    return 2 * fare

}

const fareTripler = (fare) => {
    
    return createFareMultiplier(3)(fare)

}

const selectDifferentDrivers = (arrayofDrivers, fn) => {
    return fn(arrayofDrivers)
}