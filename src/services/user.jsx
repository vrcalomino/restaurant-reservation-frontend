import axios from "axios";

const BASE_URL = "http://localhost:8080/user";

const register = (userData) => {
  return axios.post(`${BASE_URL}/register`, userData);
};

const login = (userCredentials) => {
  return axios.post(`${BASE_URL}/login`, userCredentials);
};

export { register, login };
