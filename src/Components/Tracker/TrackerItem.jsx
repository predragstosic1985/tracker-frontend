import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TrackerItem = ({
  handleEditMode,
  weight,
  date,
  index,
  handleDelteClick,
}) => {
  return (
    <Card sx={{ height: "12rem" }}>
      <CardContent>
        <Typography variant="h6" component="span">
          {weight}kg
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
      </CardContent>
      <CardActions>
        <div style={{ float: "right", marginLeft: "auto", marginTop: "2rem" }}>
          <IconButton aria-label="edit" onClick={() => handleEditMode(index)}>
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            aria-label="delete"
            onClick={() => handleDelteClick(index)}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};
export default TrackerItem;
