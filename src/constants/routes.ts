const routes = {
  home: "" as const,
  login: () => `${routes.home}/login` as const,
  createAccount: () => `${routes.home}/create-account` as const,
  forgotPassword: () => `${routes.home}/forgot-password` as const,
};

export default routes;
