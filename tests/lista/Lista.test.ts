import { Lista } from "../../src/lista/Lista";

describe("Lista", () => {
	test("ao criar uma lista vazia, deve ter tamanho zero ", () => {
		let lista = new Lista();

		expect(lista.tamanho).toBe(0);
	});

	test("ao criar uma lista vazia, deve estar vazia ", () => {
		let lista = new Lista();

		expect(lista.estarVazia).toBeTruthy();
	});

	test("ao criar uma lista vazia, a head dever ser null ", () => {
		let lista = new Lista();

		expect(lista.head).toBeNull();
	});

	test("ao criar uma lista vazia, a tail dever ser null ", () => {
		let lista = new Lista();

		expect(lista.tail).toBeNull();
	});

	test("ao criar uma lista com elemento, deve ter tamanho um ", () => {
		let lista = new Lista("valor");

		expect(lista.tamanho).toBe(1);
	});

	test("ao criar uma lista com elemento, não deve estar vazia  ", () => {
		let lista = new Lista("valor");

		expect(lista.estarVazia).toBeFalsy();
	});

	test("ao criar uma lista com elemento, este deve ser a head  ", () => {
		let lista = new Lista("valor");

		expect(lista.head).toBe("valor");
	});

	test("ao criar uma lista com elemento, este deve ser a tail  ", () => {
		let lista = new Lista("valor");

		expect(lista.tail).toBe("valor");
	});

	test("ao criar uma lista com varios elementos, estes devem ser armazenados em sequencia ", () => {
		let lista = new Lista("valor01", "valor02", "valor03", "valor04");

		expect(lista.tamanho).toBe(4);
		expect(lista.head).toBe("valor01");
		expect(lista.tail).toBe("valor04");

		let valores = lista.valores();

		expect(valores[0]).toBe("valor01");
		expect(valores[1]).toBe("valor02");
		expect(valores[2]).toBe("valor03");
		expect(valores[3]).toBe("valor04");
	});

	test("ao criar uma lista, deve ser aceito um numero nao especificado de elementos", () => {
		let lista = new Lista("valor01", "valor02");
		expect(lista.tamanho).toBe(2);

		lista = new Lista("valor01", "valor02", "valor03", "valor04");
		expect(lista.tamanho).toBe(4);

		let totalValores = new Date().getSeconds();
		let valores = [];
		for (let i = 0; i < totalValores; i++) {
			valores[i] = "valor" + i;
		}

		lista = new Lista(...valores);
		expect(lista.tamanho).toBe(totalValores);
	});

	test("ao adicionar na head, deve ser a nova head e a antiga ser o proximo elemento", () => {
		let lista = new Lista();
		lista.adicionarHead("valor01");
		lista.adicionarHead("valor02");

		expect(lista.head).toBe("valor02");
		expect(lista.valorEm(1)).toBe("valor01");
		expect(lista.tamanho).toBe(2);
	});

	test("ao adicionar na tail, deve ser a nova tail e a antiga ser o elemento anterior", () => {
		let lista = new Lista();
		lista.adicionarTail("valor01");
		lista.adicionarTail("valor02");

		expect(lista.tail).toBe("valor02");
		expect(lista.valorEm(0)).toBe("valor01");
		expect(lista.tamanho).toBe(2);
	});

	test("ao adicionar em indice 0, deve adicionar na head", () => {
		let lista = new Lista("valor01");
		lista.adicionarEm("valor02", 0);

		expect(lista.head).toBe("valor02");
		expect(lista.valorEm(1)).toBe("valor01");
		expect(lista.tamanho).toBe(2);
	});

	test("ao adicionar em indice negativo, deve adicionar na head", () => {
		let lista = new Lista("valor01");
		lista.adicionarEm("valor02", -1);

		expect(lista.head).toBe("valor02");
		expect(lista.valorEm(1)).toBe("valor01");
		expect(lista.tamanho).toBe(2);
	});

	test("ao adicionar em indice igual ao tamanho, deve adicionar na tail", () => {
		let lista = new Lista("valor01");
		lista.adicionarEm("valor02", 1);

		expect(lista.tail).toBe("valor02");
		expect(lista.valorEm(0)).toBe("valor01");
		expect(lista.tamanho).toBe(2);
	});

	test("ao adicionar em indice maior que ao tamanho, deve adicionar na tail", () => {
		let lista = new Lista("valor01");
		lista.adicionarEm("valor02", 3);

		expect(lista.tail).toBe("valor02");
		expect(lista.valorEm(0)).toBe("valor01");
		expect(lista.tamanho).toBe(2);
	});

	test("ao adicionar em indice especifico, deve manter as referencias a proximo e anterior", () => {
		let lista = new Lista();
		lista.adicionarHead("valor01");
		lista.adicionarHead("valor02");
		lista.adicionarHead("valor03");
		lista.adicionarHead("valor04");

		lista.adicionarEm("valorNovo", 1);

		let valores = lista.valores();

		expect(lista.head).toBe("valor04");
		expect(lista.tail).toBe("valor01");
		expect(valores[0]).toBe("valor04");
		expect(valores[1]).toBe("valorNovo");
		expect(valores[2]).toBe("valor03");
		expect(valores[3]).toBe("valor02");
		expect(valores[4]).toBe("valor01");
		expect(lista.tamanho).toBe(5);
	});

	test("ao listar valores, deve listar valores da head para a tail", () => {
		let lista = new Lista();
		lista.adicionarHead("valor01");
		lista.adicionarHead("valor02");
		lista.adicionarHead("valor03");

		let valores = lista.valores();

		expect(valores.length).toBe(3);
		expect(valores[0]).toBe("valor03");
		expect(valores[2]).toBe("valor01");
	});

	test("ao listar valores, se a lista estar vazia, deve retornar array vazio", () => {
		let lista = new Lista();
		let valores = lista.valores();

		expect(valores.length).toBe(0);
	});

	test("ao listar valores pelo fim, deve listar valores da tail para a head", () => {
		let lista = new Lista();
		lista.adicionarHead("valor01");
		lista.adicionarHead("valor02");
		lista.adicionarHead("valor03");

		let valores = lista.valoresFim();

		expect(valores.length).toBe(3);
		expect(valores[0]).toBe("valor01");
		expect(valores[2]).toBe("valor03");
	});

	test("ao listar valores pelo fim, se a lista estar vazia, deve retornar array vazio", () => {
		let lista = new Lista();
		let valores = lista.valoresFim();

		expect(valores.length).toBe(0);
	});

	test("ao mostrar valor em indice especifico, se a lista estar vazia, deve retornar null", () => {
		let lista = new Lista();

		expect(lista.valorEm(1)).toBeNull();
	});

	test("ao mostrar valor em indice especifico, se o indice for invalido, deve retornar null", () => {
		let lista = new Lista("valor");

		expect(lista.valorEm(1)).toBeNull();
	});

	test("ao buscar por valor chave, se existir na lista deve retornar o valor armazenado", () => {
		let lista = new Lista("valor01", "valor02", "valor03", "valor04");

		expect(lista.tamanho).toBe(4);
		expect(lista.buscar("valor02")).toBe("valor02");
	});

	test("ao buscar por valor chave, se não existir na lista deve retornar null", () => {
		let lista = new Lista("valor01", "valor02", "valor03", "valor04");

		expect(lista.tamanho).toBe(4);
		expect(lista.buscar("valorzyx")).toBeNull();
	});

	test("ao buscar por valor chave, se a lista estar vazia, deve retornar null", () => {
		let lista = new Lista();

		expect(lista.tamanho).toBe(0);
		expect(lista.buscar("valorzyx")).toBeNull();
	});

	test("ao buscar por valor chave pelo fim, se existir na lista deve retornar o valor armazenado", () => {
		let lista = new Lista("valor01", "valor02", "valor03", "valor04");

		expect(lista.tamanho).toBe(4);
		expect(lista.buscarFim("valor02")).toBe("valor02");
	});

	test("ao buscar por valor chave pelo fim, se não existir na lista deve retornar null", () => {
		let lista = new Lista("valor01", "valor02", "valor03", "valor04");

		expect(lista.tamanho).toBe(4);
		expect(lista.buscarFim("valorzyx")).toBeNull();
	});

	test("ao buscar por valor chave pelo fim, se a lista estar vazia, deve retornar null", () => {
		let lista = new Lista();

		expect(lista.tamanho).toBe(0);
		expect(lista.buscarFim("valorzyx")).toBeNull();
	});

	test("ao remover head, a nova head deve ser o proximo elemento", () => {
		let lista = new Lista("valor01", "valor02");

		expect(lista.tamanho).toBe(2);

		lista.removerHead();

		expect(lista.tamanho).toBe(1);
		expect(lista.head).toBe("valor02");
	});

	test("ao remover head, se a lista estar vazia, deve retornar", () => {
		let lista = new Lista();

		expect(lista.tamanho).toBe(0);

		lista.removerHead();

		expect(lista.tamanho).toBe(0);
		expect(lista.head).toBeNull();
	});

	test("apos remover head, se não houver mais elementos, head e tail devem ser null", () => {
		let lista = new Lista("valor");

		expect(lista.tamanho).toBe(1);
		expect(lista.head).toBe("valor");
		expect(lista.tail).toBe("valor");

		lista.removerHead();

		expect(lista.tamanho).toBe(0);
		expect(lista.head).toBeNull();
		expect(lista.tail).toBeNull();
	});

	test("ao remover tail, a nova tail deve ser o elemento anterior", () => {
		let lista = new Lista("valor01", "valor02");

		expect(lista.tamanho).toBe(2);

		lista.removerTail();

		expect(lista.tamanho).toBe(1);
		expect(lista.tail).toBe("valor01");
	});

	test("ao remover tail, se a lista estar vazia, deve retornar", () => {
		let lista = new Lista();

		expect(lista.tamanho).toBe(0);

		lista.removerTail();

		expect(lista.tamanho).toBe(0);
		expect(lista.tail).toBeNull();
	});

	test("apos remover tail, se não houver mais elementos, head e tail devem ser null", () => {
		let lista = new Lista("valor");

		expect(lista.tamanho).toBe(1);
		expect(lista.head).toBe("valor");
		expect(lista.tail).toBe("valor");

		lista.removerTail();

		expect(lista.tamanho).toBe(0);
		expect(lista.head).toBeNull();
		expect(lista.tail).toBeNull();
	});

	test("ao remover em indice 0, deve remover na head", () => {
		let lista = new Lista("valor01", "valor02", "valor03");
		lista.removerEm(0);

		expect(lista.head).toBe("valor02");
		expect(lista.valorEm(1)).toBe("valor03");
		expect(lista.tamanho).toBe(2);
	});

	test("ao remover em indice negativo, deve remover na head", () => {
		let lista = new Lista("valor01", "valor02", "valor03");
		lista.removerEm(-1);

		expect(lista.head).toBe("valor02");
		expect(lista.valorEm(1)).toBe("valor03");
		expect(lista.tamanho).toBe(2);
	});

	test("ao remover em indice igual ao tamanho, deve remover na tail", () => {
		let lista = new Lista("valor01", "valor02", "valor03");
		lista.removerEm(3);

		expect(lista.tail).toBe("valor02");
		expect(lista.valorEm(0)).toBe("valor01");
		expect(lista.tamanho).toBe(2);
	});

	test("ao remover em indice maior que ao tamanho, deve remover na tail", () => {
		let lista = new Lista("valor01", "valor02", "valor03");
		lista.removerEm(4);

		expect(lista.tail).toBe("valor02");
		expect(lista.valorEm(0)).toBe("valor01");
		expect(lista.tamanho).toBe(2);
	});

	test("ao remover em indice especifico, deve manter as referencias a proximo e anterior", () => {
		let lista = new Lista();
		lista.adicionarHead("valor01");
		lista.adicionarHead("valor02");
		lista.adicionarHead("valor03");
		lista.adicionarHead("valor04");
		lista.adicionarHead("valor05");

		expect(lista.tamanho).toBe(5);

		lista.removerEm(1);

		let valores = lista.valores();

		expect(lista.head).toBe("valor05");
		expect(lista.tail).toBe("valor01");
		expect(valores[0]).toBe("valor05");
		expect(valores[1]).toBe("valor03");
		expect(valores[2]).toBe("valor02");
		expect(valores[3]).toBe("valor01");
		expect(valores[4]).toBeUndefined();
		expect(lista.tamanho).toBe(4);
	});
});