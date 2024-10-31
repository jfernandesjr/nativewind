import axios from 'axios';

export const req = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

//ADICIONANDO UM INTERCEPTADOR NA REQUISIÇÃO (SÓ DÁ PRA FAZER INSTANCIANDO O AXIOS)

req.interceptors.request.use(config => {
  let loggedUser = 30;

  config.data.userId = loggedUser;

  return config;
});
