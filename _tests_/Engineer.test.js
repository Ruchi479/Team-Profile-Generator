//using Engineer Class
const Engineer = require("../lib/Engineer");

//creating engineer object
describe("Engineer", () => {
    it("create an example of engineer object", () => {
        const engineer = new Engineer(04, "Mabel", "mabel03@gmail.com", "mabel036");
        expect(engineer.github).toEqual(expect.any(String));
    });

    //get engineer github value from  getGithub()
    it("get engineer github value", () => {
        const engineer = new Engineer(04, "Mabel", "mabel03@gmail.com", "mabel036");
        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
    });

    //get role from  getRole()
    it("get role of employee", () => {
        const engineer = new Engineer(04, "Mabel", "mabel03@gmail.com", "mabel036");
        expect(engineer.getRole()).toEqual("Engineer");
    });
});