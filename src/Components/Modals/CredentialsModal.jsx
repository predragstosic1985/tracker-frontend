import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const CredentialsModal = ({ openModal, setOpenModal }) => {
  // info modal in with credentials for login in
  const handleClose = () => setOpenModal(false);

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Credentials
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Please check your credentials.
          <br />
          Email: user@auth.com
          <br />
          Password: user1234
        </Typography>
      </Box>
    </Modal>
  );
};

export default CredentialsModal;
