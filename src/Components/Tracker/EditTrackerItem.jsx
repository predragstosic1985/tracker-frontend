import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ButtonGroup from "@mui/material/ButtonGroup";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import DateTimePicker from "@mui/lab/DateTimePicker";

const TrackerItem = ({
  setEditMode,
  date,
  weight,
  saveUpdateMeasurement,
  index,
}) => {
  // milliseconds = date.getTime();
  const initObj = {
    id: "",
    date: new Date(),
    weight: "",
  };

  const [updateMeasurement, setUpdateMeasurement] = useState(initObj);

  useEffect(() => {
    if (date && weight) {
      setUpdateMeasurement({
        id: index,
        date: new Date(date),
        weight: parseFloat(weight).toFixed(2),
      });
    }
  }, [date, weight, index]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChangeDate = (newDate) => {
    setUpdateMeasurement({ ...updateMeasurement, date: newDate._d });
  };

  const handleOnChange = ({ target }) => {
    setUpdateMeasurement({ ...updateMeasurement, weight: target.value });
  };

  const onSaveClick = () => {
    const repackForSend = {
      ...updateMeasurement,
      date: updateMeasurement.date.getTime(),
      weight: parseFloat(updateMeasurement.weight).toFixed(2),
    };
    saveUpdateMeasurement(repackForSend);
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
              value={updateMeasurement.weight}
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
              value={updateMeasurement.date}
              onChange={handleChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>
        </Box>
      </CardContent>
      <CardActions>
        <ButtonGroup sx={{ float: "right", marginLeft: "auto" }}>
          <Button
            onClick={() => setEditMode(false)}
            color="inherit"
            variant="contained"
            startIcon={<CancelIcon />}
          >
            Cancel
          </Button>
          <Button
            onClick={onSaveClick}
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
export default TrackerItem;
