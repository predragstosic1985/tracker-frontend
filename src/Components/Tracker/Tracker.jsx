import React, { useState, useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import CreateModal from "../Modals/CreateModal";
import TrackerForm from "./TrackerForm";
import TrackerUser from "./TrackerUser";
import DeleteModal from "../Modals/DeleteModal";
import Layout from "../Layout/Layout";
import { getTrackerData, updateMeasurementData } from "../../services/services";
import useFetchier from "../../hooks/Fetcher";
import { sortBy } from "lodash";
import { AuthContext } from "../Auth/AuthContext";

// import TrackerItem from "./TrackerItem";
// import EditTrackerItem from "./EditTrackerItem";
// import ChartComponent from "../Chart/ChartComponent";
// import StepperComponent from "../Stepper/StepperComponent";

const Tracker = (props) => {
  const { authState } = useContext(AuthContext);

  const [trackerData, loadingTrackerData, reFetchTrackerData, setTrackerData] =
    useFetchier(
      getTrackerData.bind(null, authState.token ? authState.token : null),
      false
    );

  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [miniLoader, setMiniLoader] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [userDeatils, setUserDetails] = useState(null);
  const [measurements, setMeasurements] = useState(null);

  const handleAddNewClick = (e, data) => {
    setOpenModal(true);
  };

  useEffect(() => {
    if (trackerData) {
      setUserDetails(trackerData);

      const sortedData = sortBy(trackerData.measurements, function (dateObj) {
        return new Date(dateObj.date);
      }).reverse();
      setMeasurements(sortedData);
    }
  }, [trackerData]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDelteClick = (id) => {
    setSelectedItem(id);
    setOpenDeleteModal(true);
  };

  const saveUpdateMeasurement = async (newValues) => {
    measurements[newValues.id] = newValues;
    const prepare = {
      ...userDeatils,
      measurements: measurements,
    };
    try {
      const response = await updateMeasurementData(
        userDeatils.docID,
        prepare,
        authState.token
      );
      if (response) {
        console.log(response);
      }
    } catch (e) {
      console.error(e);
    } finally {
      reFetchTrackerData();
      setEditMode(false);
      setMiniLoader(false);
    }
  };

  const deleteUpdateMeasurement = async () => {
    measurements.splice(selectedItem, 1);
    const prepare = {
      ...userDeatils,
      measurements: measurements,
    };
    try {
      const response = await updateMeasurementData(
        userDeatils.docID,
        prepare,
        authState.token
      );
      if (response) {
        console.log(response);
      }
    } catch (e) {
      console.error(e);
    } finally {
      reFetchTrackerData();
      setEditMode(false);
      setOpenDeleteModal(false);
    }
  };

  const createMeasurement = async (newValues) => {
    measurements.push(newValues);
    const prepare = {
      ...userDeatils,
      measurements: measurements,
    };
    try {
      const response = await updateMeasurementData(
        userDeatils.docID,
        prepare,
        authState.token
      );
      if (response) {
        console.log(response);
      }
    } catch (e) {
      console.error(e);
    } finally {
      reFetchTrackerData();
      setEditMode(false);
      setOpenModal(false);
    }
  };

  return (
    <>
      <Layout
        content={
          <Grid container spacing={1} direction="row">
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={loadingTrackerData}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <Box
              component={Grid}
              item
              lg={8}
              md={8}
              sm={8}
              xs={8}
              display={{ lg: "block", md: "block", sm: "block", xs: "block" }}
            >
              {loadingTrackerData ? (
                <Stack
                  spacing={1}
                  sx={{ margin: "auto" }}
                  height={"70vh"}
                  width={"50vw"}
                >
                  <Skeleton variant="text" />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton
                    variant="rectangular"
                    height={"70vh"}
                    width={"50vw"}
                  />
                </Stack>
              ) : (
                <TrackerForm
                  userDeatils={userDeatils}
                  measurements={measurements}
                  saveUpdateMeasurement={saveUpdateMeasurement}
                  setEditMode={setEditMode}
                  editMode={editMode}
                  miniLoader={miniLoader}
                  setMiniLoader={setMiniLoader}
                  setOpenDeleteModal={setOpenDeleteModal}
                  handleDelteClick={handleDelteClick}
                  setSelectedItem={setSelectedItem}
                  selectedItem={selectedItem}
                  handleAddNewClick={handleAddNewClick}
                />
              )}
            </Box>
            <Grid
              component={Box}
              item
              lg={4}
              md={4}
              sm={4}
              xs={4}
              display={{ lg: "block", md: "block", sm: "block", xs: "none" }}
            >
              <TrackerUser
                userDeatils={userDeatils}
                loadingTrackerData={loadingTrackerData}
              />
            </Grid>
          </Grid>
        }
      />
      <CreateModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        createMeasurement={createMeasurement}
      />
      <DeleteModal
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        deleteUpdateMeasurement={deleteUpdateMeasurement}
      />
    </>
  );
};
export default Tracker;
