import axios from "axios";

const Base_URL = "https://mejbanempire.onrender.com/";

const menuRequest = axios.create({
  baseURL: Base_URL + "menu",
});

export { menuRequest };
