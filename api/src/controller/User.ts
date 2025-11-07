import { User } from "../model/User";
import { userService } from "../service/user";
import { app } from "../server";

export function UserController() {
    const list: User[] = [];
    const service = new userService(list);

    app.get("/users", (req, res) => {
        const users = service.getUser();
        res.json (users);
    });

    app.post("/users", (req, res) => {
        const UserData = req.body;
        const newUser = service.createUser(UserData)
        res.status(201).json(newUser);
    });

    app.post("/login", (req, res) => {
        const { email, senha } = req.body;
        try {
            const user = service.autenticar(email, senha);
            res.status(200).json({
                message: "Login realizado com sucesso",
                user: {
                    id: user.getId(),
                    nome: user.getNome(),
                    email: user.getEmail(),
                    tipo_cadastro: user.getTipo_cadastro()
                }
            });
        } catch (error) {
            res.status(401).json({ message: "Email ou senha inválidos" });
        }
    });

    app.get("/users/search", (req, res) => {
        const {nome} = req.query;

        if (nome) {
            const user = service.getUserByNome(nome as string);
            if (user) {
                return res.status(200).json(user);
            }
        }

        return res.status(404).json({ message: "Usuário não encontrado" });
    });
}