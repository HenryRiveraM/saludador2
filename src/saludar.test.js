import saludar from "./saludar.js";

describe("Saludar", () => {
	it("deberia saludar con un nombre", () => {
		const resultado = saludar("Henry");
		expect(resultado).toEqual("Hola Henry");
	});
});

