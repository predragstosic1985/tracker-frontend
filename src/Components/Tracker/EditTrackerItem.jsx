import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ButtonGroup from "@mui/material/ButtonGroup";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const TrackerItem = ({ setEditMode }) => {
  return (
    <Card>
      <CardContent>
        <Box
          sx={{ display: "flex", flexWrap: "wrap" }}
          component="form"
          autoComplete="off"
        >
          <FormControl fullWidth sx={{ m: 1 }} variant="outlined" size="small">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={"text"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    {true ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
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
