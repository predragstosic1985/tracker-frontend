import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import TrackerUserEdit from "./TrackerUserEdit";

const TrackerUser = ({
  userDeatils,
  loadingTrackerData,
  editUserMode,
  setEditUserMode,
  reFetchTrackerData,
}) => {
  const fields = [
    {
      fieldName: "First name",
      propName: "firstName",
      allowEdit: true,
      editable: true,
      inputType: "text",
      required: true,
    },
    {
      fieldName: "Last name",
      propName: "lastName",
      allowEdit: true,
      editable: true,
      inputType: "text",
    },
    {
      fieldName: "Username",
      propName: "username",
      allowEdit: false,
      editable: true,
      inputType: "text",
    },
    {
      fieldName: "Email",
      propName: "email",
      allowEdit: false,
      editable: true,
      inputType: "text",
    },
  ];

  const Header = (props) => {
    const handleEditUser = () => {
      setEditUserMode(true);
    };
    return (
      <Grid item xs={12} md={12}>
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="edit" onClick={handleEditUser}>
                <EditIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <PersonOutlineIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primaryTypographyProps={{
                color: "#009fdf",
                fontWeight: "700",
                fontSize: 19,
                fontStyle: "oblique",
              }}
              primary="User details"
            />
          </ListItem>
        </List>
      </Grid>
    );
  };

  const Item = (props) => {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: "#fff",
          p: 1,
          borderRadius: 1,
          textAlign: "left",
          fontSize: 17,
          fontWeight: "600",
          margin: "0.3rem",
          ...sx,
        }}
        {...other}
      />
    );
  };
  return (
    <>
      {loadingTrackerData ? (
        <Stack
          spacing={1}
          sx={{ margin: "auto" }}
          height={"70vh"}
          width={"50vw"}
        >
          <Skeleton variant="text" width={"30vw"} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" height={"20vh"} width={"30vw"} />
        </Stack>
      ) : (
        <Grid
          sx={{
            marginTop: "1rem",
            bgcolor: "#f5f5f5",
            color: "#e4e6e7",
          }}
        >
          <Header />
          {userDeatils && !editUserMode ? (
            fields.map(({ fieldName, propName }, index) => (
              <Box
                key={index}
                sx={{
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <Item sx={{ color: "#009fdf" }}>{fieldName}</Item>
                <Item sx={{ color: "#9a9797" }}> {userDeatils[propName]}</Item>
              </Box>
            ))
          ) : (
            <Box />
          )}
          {editUserMode ? (
            <TrackerUserEdit
              userDeatils={userDeatils}
              fields={fields.filter(({ allowEdit }) => allowEdit)}
              setEditUserMode={setEditUserMode}
              reFetchTrackerData={reFetchTrackerData}
            />
          ) : (
            <div />
          )}
        </Grid>
      )}
    </>
  );
};
export default TrackerUser;
