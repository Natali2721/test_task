import axios from 'axios';
import QUANTITY from 'constans/limit';

axios.defaults.baseURL = 'https://639cb5e116d1763ab152294c.mockapi.io/users';

const fetchUsers = (page = 1) => {
  return axios.get(`/?&limit=${QUANTITY}&page=${page}`);
};

const fetchAllUsers = () => {
  return axios.get();
};

export { fetchUsers, fetchAllUsers };
