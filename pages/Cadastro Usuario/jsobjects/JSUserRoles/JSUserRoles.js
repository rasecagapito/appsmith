export default {
  async saveRoles() {
    // 1) apaga tudo do usuário
    await del_user_roles.run();

    // 2) insere cada role selecionado
    for (const codigo of mult_regra_acesso.selectedValues) {
      await ins_user_role.run({ roleCodigo: codigo });
    }

    // 3) recarrega a query de roles do usuário
    await qry_roles_user.run();
  }
}
