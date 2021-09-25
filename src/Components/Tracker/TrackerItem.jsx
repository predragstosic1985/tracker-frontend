import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TrackerItem = ({ setEditMode, setOpenDeleteModal, weight, date }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="span">
          {weight}kg
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="edit" onClick={() => setEditMode(true)}>
          <EditIcon />
        </IconButton>
        <IconButton
          color="error"
          aria-label="delete"
          onClick={() => setOpenDeleteModal(true)}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default TrackerItem;
