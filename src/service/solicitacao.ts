import { Solicitacao } from "../model/Solicitacao";

export class solicitacaoService {
  lista: Solicitacao[] = [];

  constructor(public armazenamento: Solicitacao[]) {
    this.lista = armazenamento;
  }

  createSolicitacao(solicitacao: {
    nome_medicamento: String;
    enfermeiro_responsavel: String;
    quantidade: Number;
  }): Solicitacao {
    const solicitacaoCreated = Solicitacao.create(
      solicitacao.nome_medicamento,
      solicitacao.enfermeiro_responsavel,
      solicitacao.quantidade,
    );
    this.lista.push(solicitacaoCreated);
    return solicitacaoCreated;
  }

  getSolicitacao(): Solicitacao[] {
    return this.lista;
  }
}
