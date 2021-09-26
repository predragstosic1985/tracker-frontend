import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { isEmpty } from "lodash";

const CreateForm = ({ setOpenModal, saveUpdateMeasurement }) => {
  // modal for adding new measurement
  const initObj = {
    id: "",
    date: new Date(),
    weight: "",
  };
  const [newMeasurement, setNewMeasurement] = useState(initObj);
  const [inputsError, setInputsError] = useState({});

  useEffect(() => {
    const errors = { ...inputsError };
    Object.keys(errors).forEach((propName) => {
      if (!isEmpty(newMeasurement[propName])) {
        delete errors[propName];
      }
    });
    setInputsError(errors);
  }, [newMeasurement]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = () => {
    const errors = {};
    Object.keys(newMeasurement).forEach((propName) => {
      if (isEmpty(newMeasurement[propName])) {
        if (propName === "weight") {
          errors[propName] = { content: "Please add a value" };
        }
      }
    });
    isEmpty(errors)
      ? saveNewMeasurement(newMeasurement)
      : setInputsError(errors);
  };

  const saveNewMeasurement = (e, data) => {
    const repackForSend = {
      ...newMeasurement,
      date: newMeasurement.date.getTime(),
      weight: parseFloat(newMeasurement.weight).toFixed(2),
    };
    saveUpdateMeasurement("create", repackForSend);
    setOpenModal(false);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleChangeDate = (newDate) => {
    if (newDate) {
      setNewMeasurement({ ...newMeasurement, date: newDate._d });
    }
  };

  const handleOnChange = ({ target }) => {
    setNewMeasurement({ ...newMeasurement, weight: target.value });
  };
  return (
    <Card>
      <CardContent>
        <Box
          sx={{ display: "flex", flexWrap: "wrap" }}
          component="form"
          autoComplete="off"
        >
          <FormControl sx={{ m: 1 }} variant="outlined" size="small" fullWidth>
            <OutlinedInput
              id="outlined-adornment-weight"
              type={"number"}
              value={newMeasurement.weight}
              error={!!inputsError.weight}
              onChange={handleOnChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="weight" edge="end">
                    kg
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="outlined" size="small" fullWidth>
            <DateTimePicker
              label="Select Date and Time"
              value={newMeasurement.date}
              onChange={handleChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>
        </Box>
      </CardContent>
      <CardActions>
        <ButtonGroup sx={{ float: "right", marginLeft: "auto" }}>
          <Button
            onClick={handleClose}
            color="inherit"
            variant="contained"
            startIcon={<CancelIcon />}
          >
            Cancel
          </Button>
          <Button
            onClick={onSubmit}
            variant="contained"
            color="primary"
            startIcon={<CheckIcon />}
          >
            Save
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default CreateForm;
