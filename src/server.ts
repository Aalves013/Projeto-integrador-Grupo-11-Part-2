import express from "express";
import { UserController } from "./controller/User";
import { MedicamentoController } from "./controller/Medicamento";
import { SolicitacaoController  } from "./controller/Solicitacao";
export const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());

UserController();
MedicamentoController();
SolicitacaoController();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});