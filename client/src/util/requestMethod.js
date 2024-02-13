import axios from "axios";

const Base_URL = "https://mejbanempire2.onrender.com/";

const menuRequest = axios.create({
  baseURL: Base_URL + "menu",
});

export { menuRequest };
