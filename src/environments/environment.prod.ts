export const environment = {
  production: true,

  getUrlCep: (cep: string) => `http://viacep.com.br/ws/${cep}/json`
};
