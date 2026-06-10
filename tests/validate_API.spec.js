const { test, expect } = require('@playwright/test');
const employee = require('../employee.json');

test('Validate JSON data', async () => {

    expect(employee.phone.Mobile2).toBe('098-765-4321');
    console.log("✓ Mobile2 number is valid");

    expect(employee.skills).toContain('API testing');
    console.log("✓ Employee has API testing skill");

});

//Serialization

test('Create Employee', async () => {

   const employee = {
    name: "John",
    job: "QA Engineer",
    phone: {
        Mobile1: "123-456-7890",
        Mobile2: "098-765-4321"
    },
    skills: ["Manual testing", "API testing", "Automation testing"]
};
console.log(employee);

const jsonData = JSON.stringify(employee);

console.log(jsonData);
});
