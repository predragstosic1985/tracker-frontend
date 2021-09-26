import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CreateForm from "./CreateForm";

const CreateModal = ({ openModal, setOpenModal, saveUpdateMeasurement }) => {
  return (
    <Dialog open={openModal} aria-labelledby="draggable-dialog-title">
      <DialogContent>
        <CreateForm
          openModal={openModal}
          setOpenModal={setOpenModal}
          saveUpdateMeasurement={saveUpdateMeasurement}
        />
      </DialogContent>
    </Dialog>
  );
};
export default CreateModal;
