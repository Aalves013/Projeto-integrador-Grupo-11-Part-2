export class Medicamento {
  constructor(
    private nome: String,
    private dosagem: Number,
    private forma_administrativa: String,
    private dataFab: Number,
    private dataVal: Number,
    private lote: Number,
    private no_estoque: Number,
    private complemento: String,
    private categoria: String

  ) {
    if (!nome) throw new Error("nome obrigatório");
    if (!dosagem) throw new Error("dosagem obrigatório");
    if (!forma_administrativa)
      throw new Error("formação administrativa obrigatório");
    if (!lote) throw new Error("lote obrigatório");
    if (!no_estoque) throw new Error("quantidade obrigatório");
  }

  static create(
    nome: String,
    dosagem: Number,
    forma_administrativa: String,
    dataFab: Number,
    dataVal: Number,
    lote: Number,
    no_estoque: Number,
    complemento: String,
    categoria: String
  ) {
    return new Medicamento(
      nome,
      dosagem,
      forma_administrativa,
      dataFab,
      dataVal,
      lote,
      no_estoque,
      complemento,
      categoria
    );
  }

  getNome(): String {
    return this.nome;
  }

  getDosagem(): Number {
    return this.dosagem;
  }

  getForma_administrativa(): String {
    return this.forma_administrativa;
  }

  getDataFab(): Number {
    return this.dataFab;
  }

  getDataVal(): Number {
    return this.dataVal;
  }

  getLote(): Number {
    return this.lote;
  }

  getNo_estoque(): Number {
    return this.no_estoque;
  }

  getComplemento(): String {
    return this.complemento;
  }

  getCategoria(): String {
    return this.categoria;
  }
}
