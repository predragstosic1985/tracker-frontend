import axios from "axios";

// const baseLink = "http://localhost:5000/api";
const baseLink = "https://backend-tracker.herokuapp.com/api";

// TODO deafult options header
// const defaultOptions = {};

// get user
export const getTrackerData = async (token) => {
  const data = await axios.get(`${baseLink}/tracker/read`, {
    headers: {
      Authorization: token,
    },
  });
  return data;
};

// update one measurement
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

// update user
export const updateUserData = async (id, updatedUser, token) => {
  const data = await axios.put(
    `${baseLink}/tracker/update/${id}`,
    updatedUser,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return data;
};

// login
export const loginUser = async (user) => {
  const data = await axios.post(`${baseLink}/login`, user);
  return data;
};
