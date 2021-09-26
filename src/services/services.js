import axios from "axios";

const baseLink = "http://localhost:5000/api";

export const getTrackerData = async () => {
  const data = await axios.get(`${baseLink}/tracker/read`);
  return data;
};

export const updateMeasurement = async (id, updatedValues) => {
  const data = await axios.put(
    `${baseLink}/tracker/update/${id}`,
    updatedValues
  );
  return data;
};

export const loginUser = async (user) => {
  const data = await axios.post(`${baseLink}/login`, user);
  return data;
};
