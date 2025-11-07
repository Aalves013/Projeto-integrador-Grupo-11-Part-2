import { Medicamento } from "../model/Medicamento";

export class MedicamentoService {
  lista: Medicamento[] = [];

  constructor(public armazenamento: Medicamento[]) {
    this.lista = armazenamento;
  }

  createMedicamento(medicamento: {
    nome: String;
    dosagem: Number;
    forma_administrativa: String;
    dataFab: Number;
    dataVal: Number;
    lote: Number;
    no_estoque: Number;
    complemento: String;
    categoria: String;
  }): Medicamento {
    const medicamentoCreated = Medicamento.create(
      medicamento.nome,
      medicamento.dosagem,
      medicamento.forma_administrativa,
      medicamento.dataFab,
      medicamento.dataVal,
      medicamento.lote,
      medicamento.no_estoque,
      medicamento.complemento,
      medicamento.categoria,
    );
    this.lista.push(medicamentoCreated);
    return medicamentoCreated;
  }
  filtrarMedicamentoPorCategoria(categoria: String): Medicamento[] {
    return this.lista.filter(
      (medicamento) => medicamento.getCategoria() === categoria
    );
  }
  getMedicamento(): Medicamento[] {
    return this.lista;
  }
}
