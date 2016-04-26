import exampleService from "../../../src/services/exampleService"
import {expect} from "chai";

describe("exampleService", () => {

    it("should return hello world", () => {
        expect(exampleService.helloWorld()).to.equal("Hello world");
    });

});