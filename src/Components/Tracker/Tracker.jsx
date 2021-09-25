import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import CreateModal from "../Modals/CreateModal";
import TrackerForm from "./TrackerForm";
import TrackerUser from "./TrackerUser";
import DeleteModal from "../Modals/DeleteModal";
import Layout from "../Layout/Layout";
import { getTrackerData, updateMeasurement } from "../../services/services";
import useFetchier from "../../hooks/Fetcher";

// import TrackerItem from "./TrackerItem";
// import EditTrackerItem from "./EditTrackerItem";
// import ChartComponent from "../Chart/ChartComponent";
// import StepperComponent from "../Stepper/StepperComponent";

const Tracker = (props) => {
  /* eslint-disable no-unused-vars */
  const [trackerData, loadingTrackerData, reFetchTrackerData, setTrackerData] =
    useFetchier(getTrackerData);

  const [openModal, setOpenModal] = useState(false);
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
      setMeasurements(trackerData.measurements);
    }
  }, [trackerData]); // eslint-disable-line react-hooks/exhaustive-deps

  const saveUpdateMeasurement = async (newValues) => {
    measurements[newValues.id] = newValues;
    try {
      const response = await updateMeasurement(userDeatils.docID, userDeatils);
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
              <TrackerUser userDeatils={userDeatils} />
            </Grid>
          </Grid>
        }
      />
      <CreateModal openModal={openModal} setOpenModal={setOpenModal} />
      <DeleteModal
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
      />
    </>
  );
};
export default Tracker;
