import axios from "axios";

const baseLink = "http://localhost:5000/api";

export const getData = async () => {
  const data = await axios.get(`${baseLink}/tracker/read`);
  return data;
};
