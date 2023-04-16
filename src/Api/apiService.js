import axios from 'axios';
const QUANTITY = 8;
axios.defaults.baseURL = 'https://639cb5e116d1763ab152294c.mockapi.io/users';

export const fetchUsers = (page = 1) => {
  return axios.get(`/?&limit=${QUANTITY}&page=${page}`);
};
