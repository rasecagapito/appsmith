export default {
  limparFormUsuario() {
    resetWidget("inp_nome", true);
    resetWidget("inp_sobrenome", true);
    resetWidget("inp_email", true);
    resetWidget("inp_senha", true);
    resetWidget("input_login", true);
    resetWidget("sel_filial", true);
    closeModal("mod_usu01"),(true);
  }
}
