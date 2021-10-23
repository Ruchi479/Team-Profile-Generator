//using Employee constructor
const Employee = require("../lib/Employee");

//creates employee object
describe("Employee", () => {
    it("create an employee object", () => {
        const employee = new Employee();
        expect(typeof employee).toBe("object");
    });

    //creates an example of employee object
    it("create an example of employee object", () => {
        const employee = new Employee(04, "Mabel", "mabel03@gmail.com");
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.email).toEqual(expect.any(String));
    });

    //get id from getID()
    it("get employee ID", () => {
        const employee = new Employee(04, "Mabel", "mabel03@gmail.com");
        expect(employee.getId()).toEqual(expect.any(Number));
    });

    //get name from getname()
    it("get employee name", () => {
        const employee = new Employee(04, "Mabel", "mabel03@gmail.com");
        expect(employee.getName()).toEqual(expect.any(String));
    });

    //get email from getEmail()
    it("get employee email", () => {
        const employee = new Employee(04, "Mabel", "mabel03@gmail.com");
        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    });

    //get role from getRole()
    it("get employee role", () => {
        const employee = new Employee(04, "Mabel", "mabel03@gmail.com");
        expect(employee.getRole()).toEqual("Employee");
    });
});