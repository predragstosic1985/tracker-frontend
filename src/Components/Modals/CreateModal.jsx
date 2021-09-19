import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CreateForm from "./CreateForm";

const CreateModal = ({ openModal, setOpenModal }) => {
  return (
    <Dialog open={openModal} aria-labelledby="draggable-dialog-title">
      <DialogContent>
        <CreateForm openModal={openModal} setOpenModal={setOpenModal} />
      </DialogContent>
    </Dialog>
  );
};
export default CreateModal;
