import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";

const TrackerUser = ({ userDeatils }) => {
  /* eslint-disable no-unused-vars */
  return (
    <>
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Typography component="span" align="center">
                  Welcome
                </Typography>
              }
              disablePadding
            >
              <ListItemButton>
                <Typography component="span" align="center">
                  {userDeatils ? userDeatils.firstName : ""}
                </Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
export default TrackerUser;
