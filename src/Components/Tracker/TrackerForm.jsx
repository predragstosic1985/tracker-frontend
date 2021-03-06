import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TrackerItem from "./TrackerItem";
import TrackerItemEdit from "./TrackerItemEdit";
import moment from "moment";

const TrackerForm = ({
  userDeatils,
  measurements,
  saveUpdateMeasurement,
  setEditMode,
  editMode,
  miniLoader,
  setMiniLoader,
  setOpenDeleteModal,
  handleDelteClick,
  setSelectedItem,
  selectedItem,
  handleAddNewClick,
}) => {
  // format time
  const timeFormater = (dateToFormat) => {
    let dateFormated = "";
    if (dateToFormat) {
      const dateCreate = new Date(dateToFormat);
      dateFormated = dateCreate.toLocaleTimeString();
    }
    return dateFormated;
  };

  // format date
  const dateFormater = (dateToFormat) => {
    let dateFormated = "";
    if (dateToFormat) {
      const dateCreate = new Date(dateToFormat);
      dateFormated = moment(dateCreate).format("Do MMMM YYYY");
    }
    return dateFormated;
  };

  const handleEditMode = (id) => {
    setSelectedItem(id);
    setEditMode(true);
  };

  return (
    <>
      <Timeline position="alternate" sx={{ bgcolor: "#f5f5f5" }}>
        <Typography
          variant="h6"
          component="span"
          align="center"
          sx={{ marginTop: "1rem", fontStyle: "oblique" }}
        >
          Welcome {userDeatils ? userDeatils.firstName : ""}
        </Typography>
        <Button
          onClick={handleAddNewClick}
          variant="contained"
          startIcon={<AddIcon />}
          disabled={editMode}
          sx={{
            width: "8rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Add new
        </Button>
        {measurements ? (
          measurements.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {timeFormater(measurements[index]["date"])}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <FitnessCenterIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                {editMode && selectedItem === index ? (
                  <TrackerItemEdit
                    setEditMode={setEditMode}
                    date={measurements[index]["date"]}
                    weight={measurements[index]["weight"]}
                    saveUpdateMeasurement={saveUpdateMeasurement}
                    index={index}
                    miniLoader={miniLoader}
                    setMiniLoader={setMiniLoader}
                  />
                ) : (
                  <TrackerItem
                    weight={measurements[index]["weight"]}
                    date={dateFormater(measurements[index]["date"])}
                    handleEditMode={handleEditMode}
                    setOpenDeleteModal={setOpenDeleteModal}
                    handleDelteClick={handleDelteClick}
                    index={index}
                  />
                )}
              </TimelineContent>
            </TimelineItem>
          ))
        ) : (
          <div />
        )}
      </Timeline>
    </>
  );
};
export default TrackerForm;
