//using Intern constructor
const Intern = require("../lib/Intern");

//creating intern object
describe("Intern", () => {
    it("create an example of intern object", () => {
        const intern = new Intern(04, "Mabel", "mabel03@gmail.com", "DPS");
        expect(intern.school).toEqual(expect.any(String));
    });

    //get intern school from  getSchool()
    it("get intern school", () => {
        const intern = new Intern(04, "Mabel", "mabel03@gmail.com", "DPS");
        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    });

    //get role from  getRole()
    it("get role of intern", () => {
        const intern = new Intern(04, "Mabel", "mabel03@gmail.com", "DPS");
        expect(intern.getRole()).toEqual("Intern");
    });
});