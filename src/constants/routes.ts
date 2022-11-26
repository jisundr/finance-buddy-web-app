const routes = {
  home: "/" as const,
  login: () => `${routes.home}login` as const,
  register: () => `${routes.home}register` as const,
};

export default routes;
