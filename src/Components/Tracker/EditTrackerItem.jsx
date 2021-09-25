import React, { useState } from "react";
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
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import DateTimePicker from "@mui/lab/DateTimePicker";

const TrackerItem = ({ setEditMode, date }) => {
  // milliseconds = date.getTime();
  const [value, setValue] = useState(new Date(date));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <CardContent>
        <Box
          sx={{ display: "flex", flexWrap: "wrap" }}
          component="form"
          autoComplete="off"
        >
          <FormControl sx={{ m: 1 }} variant="outlined" size="small" required>
            <InputLabel htmlFor="outlined-adornment-weight">weight</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={"number"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    kg
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="outlined" size="small">
            <DateTimePicker
              label="Select Date and Time"
              value={value}
              onChange={handleChange}
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
            onClick={() => setEditMode(false)}
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
