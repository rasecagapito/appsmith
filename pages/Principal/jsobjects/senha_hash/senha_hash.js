export default {
  hashSenha(senha) {
    return bcrypt.hashSync(senha, 10);   // gera hash seguro
  }
}
