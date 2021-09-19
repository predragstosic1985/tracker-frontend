import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ButtonGroup from "@mui/material/ButtonGroup";

const TrackerItem = ({ setEditMode, setOpenDeleteModal }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="span">
          Eat
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup sx={{ float: "right", marginLeft: "auto" }}>
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
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};
export default TrackerItem;
