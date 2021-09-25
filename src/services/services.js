import axios from "axios";

const baseLink = "http://localhost:5000/api";

export const getTrackerData = async () => {
  const data = await axios.get(`${baseLink}/tracker/read`);
  return data;
};

export const updateMeasurement = async (id) => {
  const data = await axios.get(`${baseLink}/tracker/update/${id}`);
  return data;
};
