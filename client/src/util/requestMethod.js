import axios from "axios";

const Base_URL = "http://localhost:3000/";

const menuRequest = axios.create({
  baseURL: Base_URL + "menu",
});

export { menuRequest };
