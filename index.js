const employee = {
    name: "Jason",
    streetAddress: "My Home",
};
function updateEmployeeWithKeyAndValue (employee, key, value) {
    return Object.assign({}, employee, {[key]: value});
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value; 
    return employee;
} 
function deleteFromEmployeeByKey (employee, key) {
    const newEmployee = {... employee};
    return Object.assign({}, delete newEmployee[key]);
}
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key]; 
    return employee;
} 