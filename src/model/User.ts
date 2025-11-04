export class User {
  constructor(
    private id: String,
    private nome: String,
    private email: String,
    private senha: String,
    private tipo_cadastro: String
  ) {
    if (!nome) throw new Error("nome obrigatório");
    if (!email) throw new Error("email obrigatório");
    if (!senha) throw new Error("senha obrigatória");

    if (nome.length < 6) throw new Error("nome muito curto");
    if (senha.length < 6) throw new Error("senha muito curta");
  }

  static create(
    id: String,
    nome: String,
    email: String,
    senha: String,
    tipo_cadastro: String
  ) {
    return new User(id, nome, email, senha, tipo_cadastro);
  }

  getId(): String {
    return this.id;
  }

  getNome(): String {
    return this.nome;
  }

  getEmail(): String {
    return this.email;
  }

  getSenha(): String {
    return this.senha;
  }

  getTipo_cadastro(): String {
    return this.tipo_cadastro;
  }
}
