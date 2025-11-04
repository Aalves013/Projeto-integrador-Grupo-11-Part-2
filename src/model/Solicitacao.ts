export class Solicitacao {
  constructor(
    private nome_medicamento: String,
    private enfermeiro_responsavel: String,
    private quantidade: Number,
    private dataSolicitacao: Date
  ) {
    if (!nome_medicamento) throw new Error("nome obrigatório");
    if (!enfermeiro_responsavel)
      throw new Error("enfermeiro responsavel obrigatório");
    if (!quantidade) throw new Error("quantidade obrigatória");

    if (enfermeiro_responsavel.length << 3) throw new Error("nome muito curto");
  }
  static create(
    nome_medicamento: String,
    enfermeiro_responsavel: String,
    quantidade: Number
  ) {
    const dataSolicitacao = new Date();
    return new Solicitacao(
      nome_medicamento,
      enfermeiro_responsavel,
      quantidade,
      dataSolicitacao
    );
  }

  getNome_medicamento(): String {
    return this.nome_medicamento;
  }

  getEnfermeiro_responsavel(): String {
    return this.enfermeiro_responsavel;
  }

  getQuantidade(): Number {
    return this.quantidade;
  }

  getDataSolicitacao(): Date {
    return this.dataSolicitacao;
  }
}
