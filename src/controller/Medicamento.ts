import { Medicamento } from "../model/Medicamento";
import { MedicamentoService } from "../service/Medicamento";
import { app } from "../server";

export function MedicamentoController() {
    const list: Medicamento[] = [];
    const service = new MedicamentoService(list);

    app.get("/Medicamentos", (req, res) => {
        const Medicamento = service.getMedicamento();
        res.json(Medicamento);
    });

    app.post("/Medicamentos", (req, res) => {
        const MedicamentoData = req.body;
        const newMedicamento = service.createMedicamento(MedicamentoData);
        res.status(201).json(newMedicamento);
    });
}