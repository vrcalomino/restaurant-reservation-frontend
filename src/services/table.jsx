import axios from "axios";

const BASE_URL = "localhost:8080/table";

const getTableData = (table_id) => {
  return axios.get(`${BASE_URL}/getTable/${table_id}`);
};

export { getTableData };
