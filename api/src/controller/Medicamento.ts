import { Medicamento } from "../model/Medicamento";
import { MedicamentoService } from "../service/Medicamento";
import { app } from "../server";

export function MedicamentoController() {
    const list: Medicamento[] = [];
    const service = new MedicamentoService(list);

    app.get("/api/Medicamentos", (req, res) => {
        const { categoria } = req.query;

        if (categoria) {
            const medicamentosFiltrados = service.filtrarMedicamentoPorCategoria(categoria as string);
            return res.json(medicamentosFiltrados);
        }

        const Medicamento = service.getMedicamento();
        res.json(Medicamento);
    });

    app.post("/api/Medicamentos", (req, res) => {
        const MedicamentoData = req.body;
        const newMedicamento = service.createMedicamento(MedicamentoData);
        res.status(201).json(newMedicamento);
    });
}
