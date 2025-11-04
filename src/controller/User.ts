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