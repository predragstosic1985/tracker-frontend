import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const DeleteModal = ({
  openDeleteModal,
  setOpenDeleteModal,
  saveUpdateMeasurement,
}) => {
  const handleOnDeleteClick = () => {
    setOpenDeleteModal(false);
    saveUpdateMeasurement("delete");
  };
  return (
    <Dialog open={openDeleteModal} aria-labelledby="draggable-dialog-title">
      <DialogContent>
        Are you sure you want to delete the measurement?
      </DialogContent>
      <DialogActions>
        <ButtonGroup sx={{ float: "right", marginLeft: "auto" }}>
          <Button
            color="inherit"
            onClick={() => setOpenDeleteModal(false)}
            variant="contained"
            startIcon={<CancelIcon />}
          >
            No
          </Button>
          <Button
            onClick={handleOnDeleteClick}
            variant="contained"
            color="primary"
            startIcon={<CheckIcon />}
          >
            Yes
          </Button>
        </ButtonGroup>
      </DialogActions>
    </Dialog>
  );
};
export default DeleteModal;
