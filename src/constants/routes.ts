const routes = {
  home: "/" as const,
  login: () => `${routes.home}login` as const,
  register: () => `${routes.home}register` as const,
  forgotPassword: () => `${routes.home}forgot-password` as const,
};

export default routes;
