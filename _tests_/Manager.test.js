//using Manager constructor
const Manager = require("../lib/Manager");

//creating manager object
describe("Manager", () => {
    it("create an instance of manager object", () => {
        const manager = new Manager(45, "Mabel", "mabel03@gmail.com", 98);
        expect(manager.officeNumber).toEqual(expect.any(Number));
    });

    //get role from  getRole()
    it("get role of manager", () => {
        const manager = new Manager(45, "Mabel", "mabel03@gmail.com", 98);
        expect(manager.getRole()).toEqual("Manager");
    });
});