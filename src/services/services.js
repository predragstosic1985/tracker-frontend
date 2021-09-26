import axios from "axios";

const baseLink = "http://localhost:5000/api";

// TODO deafult options header
// const defaultOptions = {};

export const getTrackerData = async (token) => {
  const data = await axios.get(`${baseLink}/tracker/read`, {
    headers: {
      Authorization: token,
    },
  });
  return data;
};

export const updateMeasurementData = async (id, updatedValues, token) => {
  const data = await axios.put(
    `${baseLink}/tracker/update/${id}`,
    updatedValues,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return data;
};

export const loginUser = async (user) => {
  const data = await axios.post(`${baseLink}/login`, user);
  return data;
};
