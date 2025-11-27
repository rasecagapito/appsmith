export default {
  checkAuth () {
    if (!appsmith.store.usuario) {
      navigateTo("Login");
    }
  }
}
