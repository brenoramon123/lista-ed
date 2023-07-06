import { No } from "./No";

export class Lista {
  private _totalNos: number = 0;
  private _head: No = null;
  private _tail: No = null;

  constructor(...valores: any[]) {
    for (let valor of valores) {
      this.adicionarTail(valor);
    }
  }

  public adicionarHead(valor: any) {
    let novoNo = new No(valor, this._head);

    if (this._head) {
      this._head.anterior = novoNo;
    }

    this._head = novoNo;

    if (!this._tail) {
      this._tail = novoNo;
    }

    this._totalNos++;
  }

  public adicionarTail(valor: any) {
    let novoNo = new No(valor, null, this._tail);

    if (this._tail) {
      this._tail.proximo = novoNo;
    }

    this._tail = novoNo;

    if (!this._head) {
      this._head = novoNo;
    }

    this._totalNos++;
  }

  public adicionarEm(valor: any, indice: number) {
    if (indice <= 0) {
      this.adicionarHead(valor);
      return;
    }

    if (indice >= this._totalNos) {
      this.adicionarTail(valor);
      return;
    }

    let noAtual = this.obterNo(indice);
    let noAnterior = noAtual.anterior;
    let novoNo = new No(valor, noAtual, noAnterior);

    noAnterior.proximo = novoNo;
    noAtual.anterior = novoNo;

    this._totalNos++;
  }

  public valorEm(indice: number): any {
    let no = this.obterNo(indice);
    if (no) {
      return no.valor;
    }
    return null;
  }

  public buscar(valor: any): any {
    let noAtual = this._head;

    while (noAtual) {
      if (noAtual.valor === valor) {
        return noAtual.valor;
      }
      noAtual = noAtual.proximo;
    }

    return null;
  }

  public get head(): any {
    if (this._head) {
      return this._head.valor;
    }
    return null;
  }

  public get tail(): any {
    if (this._tail) {
      return this._tail.valor;
    }
    return null;
  }

  public get tamanho(): number {
    return this._totalNos;
  }

  public get estarVazia(): boolean {
    return this.tamanho === 0;
  }

  public valores(): any[] {
    let valores: any[] = [];
    let noAtual = this._head;

    while (noAtual) {
      valores.push(noAtual.valor);
      noAtual = noAtual.proximo;
    }

    return valores;
  }
  public buscarFim(valor: any): any {
    let noAtual = this._tail;

    while (noAtual) {
      if (noAtual.valor === valor) {
        return noAtual.valor;
      }
      noAtual = noAtual.anterior;
    }

    return null;
  }
  public removerTail() {
	if (!this._tail) {
	  return;
	}
  
	this._tail = this._tail.anterior;
	if (this._tail) {
	  this._tail.proximo = null;
	} else {
	  this._head = null;
	}
  
	this._totalNos--;
  }
  public removerHead() {
	if (!this._head) {
	  return;
	}
  
	this._head = this._head.proximo;
	if (this._head) {
	  this._head.anterior = null;
	} else {
	  this._tail = null;
	}
  
	this._totalNos--;
  }
  public removerEm(indice: number) {
	if (indice < 0) {
		this.removerHead();
	  return;
	}else if( indice >= this._totalNos) {
		this.removerTail();
	  return;
	}
  
	if (indice === 0) {
	  this.removerHead();
	  return;
	}
  
	let noRemover = this.obterNo(indice);
	let noAnterior = noRemover.anterior;
	let noProximo = noRemover.proximo;
  
	if (noAnterior) {
	  noAnterior.proximo = noProximo;
	}
  
	if (noProximo) {
	  noProximo.anterior = noAnterior;
	} else {
	  this._tail = noAnterior;
	}
  
	this._totalNos--;
  }

  public valoresFim(): any[] {
    let valores: any[] = [];
    let noAtual = this._tail;

    while (noAtual) {
      valores.push(noAtual.valor);
      noAtual = noAtual.anterior;
    }

    return valores;
  }

  private obterNo(indice: number): No {
    if (indice >= 0 && indice < this._totalNos) {
      let noAtual = this._head;

      for (let i = 0; i < indice; i++) {
        noAtual = noAtual.proximo;
      }

      return noAtual;
    }

    return null;
  }
}