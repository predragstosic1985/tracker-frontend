import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import ButtonGroup from "@mui/material/ButtonGroup";
// import AddIcon from "@mui/icons-material/Add";
// import TextField from "@mui/material/TextField";
// import Input from "@mui/material/Input";
// import FilledInput from "@mui/material/FilledInput";
// import FormHelperText from "@mui/material/FormHelperText";

const CreateForm = ({ setOpenModal }) => {
  const handleClose = () => {
    setOpenModal(false);
  };
  const onSubmit = (e, data) => {
    setOpenModal(false);
  };
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap" }}
      component="form"
      autoComplete="off"
    >
      <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={"text"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end">
                {true ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={"text"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end">
                {true ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <ButtonGroup sx={{ float: "right", marginLeft: "auto" }}>
        <Button
          color="inherit"
          onClick={handleClose}
          variant="contained"
          startIcon={<CancelIcon />}
        >
          Cancel
        </Button>
        <Button
          onClick={handleClose}
          variant="contained"
          color="primary"
          startIcon={<CheckIcon />}
        >
          Save
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default CreateForm;
