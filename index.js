/* Your Code Here */
const createEmployeeRecord = employeeArr => {
    const[firstName, familyName,title, payPerHour, timeInEvents,timeOutEvents] = employeeArr
    const record = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
    }
    return record
}

const createEmployeeRecords = employeeArr => {
    return employeeArr.map(record => createEmployeeRecord(record))
}

const createTimeInEvent = function (dateTime) {
    const [date, time] = dateTime.split(' ')
    this.timeInEvents.push({
        type : "TimeIn",
        hour : parseInt(time),
        date : date
    })
    return this
}

function createTimeOutEvent(dateTime) {
    const [date, time] = dateTime.split(' ')
    this.timeOutEvents.push({
        type : "TimeOut",
        hour : parseInt(time),
        date : date
    })
    return this
}

const hoursWorkedOnDate = function (date) {
    const timeIn = this.timeInEvents.find(e => e.date === date)
    const timeOut = this.timeOutEvents.find(e => e.date === date)

    return (timeOut.hour - timeIn.hour) / 100
}

const wagesEarnedOnDate = function (date) {
    const hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}

const findEmployeeByFirstName = function (collection,firstName) {
    return collection.find(e => e.firstName === firstName)
}

const calculatePayroll = (employeeArray) => {
    return employeeArray.reduce(function (memo, e) {
        return memo + allWagesFor.call(e)
    }, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

