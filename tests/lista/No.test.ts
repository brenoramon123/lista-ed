import { No } from "../../src/lista/No";

describe("Nó de Lista", () => {
	test("ao criar um nó com valor, deve ter valor armazenado e referencias nulas ", () => {
		let valor = "valor";
		let no = new No(valor);

		expect(no.valor).toBe(valor);
		expect(no.proximo).toBeNull();
		expect(no.anterior).toBeNull();
	});

	test("ao criar um nó com valor e indicar próximo, deve ter valor armazenado e referencia preenchida ", () => {
		let valor = "valor";
		let no2 = new No(valor + " novo");
		let no1 = new No(valor, no2);

		expect(no2.valor).toBe(valor + " novo");
		expect(no2.proximo).toBeNull();

		expect(no1.valor).toBe(valor);
		expect(no1.proximo).toBe(no2);
	});

	test("ao criar um nó com valor e indicar anterior, deve ter valor armazenado e referencia preenchida ", () => {
		let valor = "valor";
		let no2 = new No(valor + " novo");
		let no1 = new No(valor, null, no2);

		expect(no2.valor).toBe(valor + " novo");
		expect(no2.anterior).toBeNull();

		expect(no1.valor).toBe(valor);
		expect(no1.anterior).toBe(no2);
	});

	test("ao mudar o próximo nó, deve ter a referencia alterada ", () => {
		let valor = "valor";
		let no2 = new No(valor + " novo");
		let no1 = new No(valor);

		expect(no1.valor).toBe(valor);
		expect(no1.proximo).toBeNull();

		no1.proximo = no2;

		expect(no2.valor).toBe(valor + " novo");
		expect(no2.proximo).toBeNull();

		expect(no1.valor).toBe(valor);
		expect(no1.proximo).toBe(no2);
	});

	test("ao mudar o nó anterior, deve ter a referencia alterada ", () => {
		let valor = "valor";
		let no2 = new No(valor + " novo");
		let no1 = new No(valor);

		expect(no1.valor).toBe(valor);
		expect(no1.anterior).toBeNull();

		no1.anterior = no2;

		expect(no2.valor).toBe(valor + " novo");
		expect(no2.anterior).toBeNull();

		expect(no1.valor).toBe(valor);
		expect(no1.anterior).toBe(no2);
	});

	test("ao comparar um valor recebido, deve retornar true se for igual ao armazenado ", () => {
		let valor = "valor";
		let no1 = new No(valor);

		expect(no1.valor).toBe(valor);
		expect(no1.igual(valor)).toBeTruthy();
	});

	test("ao comparar um valor recebido, deve retornar false se for diferente ao armazenado ", () => {
		let valor = "valor";
		let no1 = new No(valor);

		expect(no1.valor).toBe(valor);
		expect(no1.igual(valor + " ")).toBeFalsy();
	});
});