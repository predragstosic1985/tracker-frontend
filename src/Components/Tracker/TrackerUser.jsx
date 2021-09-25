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

const TrackerUser = ({ userDeatils }) => {
  const fields = [
    {
      fieldName: "Name",
      propName: "firstName",
      inMainTable: true,
      editable: true,
      inputType: "text",
      required: true,
    },
    {
      fieldName: "Last Name",
      propName: "lastName",
      inMainTable: true,
      editable: true,
      inputType: "text",
    },
    {
      fieldName: "Username",
      propName: "username",
      inMainTable: true,
      editable: true,
      inputType: "text",
    },
  ];

  const Header = (props) => {
    return (
      <Grid item xs={12} md={12}>
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
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
    <Grid
      sx={{
        marginTop: "1rem",
        bgcolor: "#f5f5f5",
        color: "#e4e6e7",
      }}
    >
      <Header />

      {userDeatils ? (
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
    </Grid>
  );
};
export default TrackerUser;
