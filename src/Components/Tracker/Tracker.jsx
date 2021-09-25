import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CreateModal from "../Modals/CreateModal";
import TrackerForm from "./TrackerForm";
import TrackerUser from "./TrackerUser";
import DeleteModal from "../Modals/DeleteModal";
import Layout from "../Layout/Layout";
import { getTrackerData } from "../../services/services";
import useFetchier from "../../hooks/Fetcher";
// import TrackerItem from "./TrackerItem";
// import EditTrackerItem from "./EditTrackerItem";
// import ChartComponent from "../Chart/ChartComponent";
// import StepperComponent from "../Stepper/StepperComponent";

const Tracker = (props) => {
  /* eslint-disable no-unused-vars */
  const [selectedData, setSelectedData] = useState(1);
  const [trackerData, loadingTrackerData, reFetchTrackerData, setTrackerData] =
    useFetchier(getTrackerData.bind(null, selectedData), true);

  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [userDeatils, setUserDetails] = useState(null);

  const handleAddNewClick = (e, data) => {
    setOpenModal(true);
  };

  useEffect(() => {
    if (selectedData) {
      reFetchTrackerData();
    } else {
      setTrackerData(null);
    }
  }, [selectedData]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (trackerData) {
      setUserDetails(trackerData);
    }
  }, [trackerData]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Layout
        content={
          <Grid container spacing={1} direction="row">
            <Box
              component={Grid}
              item
              lg={8}
              md={8}
              sm={8}
              xs={8}
              display={{ lg: "block", md: "block", sm: "block", xs: "block" }}
            >
              <TrackerForm userDeatils={userDeatils} />
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
