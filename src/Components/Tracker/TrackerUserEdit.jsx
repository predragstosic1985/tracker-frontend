import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { isEmpty } from "lodash";
import { updateUserData } from "../../services/services";
import { AuthContext } from "../Auth/AuthContext";

const EditTrackerUser = ({
  reFetchTrackerData,
  setEditUserMode,
  userDeatils,
  fields,
}) => {
  const { authState } = useContext(AuthContext);
  const [updateUser, setUpdateUser] = useState(
    userDeatils
      ? { firstName: userDeatils.firstName, lastName: userDeatils.lastName }
      : {
          firstName: "",
          lastName: "",
        }
  );
  const [inputsError, setInputsError] = useState({});

  useEffect(() => {
    const errors = { ...inputsError };
    Object.keys(errors).forEach((propName) => {
      if (!isEmpty(updateUser[propName])) {
        delete errors[propName];
      }
    });
    setInputsError(errors);
  }, [updateUser]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = () => {
    const errors = {};
    Object.keys(updateUser).forEach((propName) => {
      if (isEmpty(updateUser[propName])) {
        errors[propName] = {
          content: "Please add value.",
        };
      }
    });
    isEmpty(errors) ? onSave(updateUser) : setInputsError(errors);
  };

  const onSave = async () => {
    setEditUserMode(false);
    const repackObj = {
      ...userDeatils,
      firstName: updateUser.firstName,
      lastName: updateUser.lastName,
    };

    try {
      const response = await updateUserData(
        userDeatils.docID,
        repackObj,
        authState.token
      );
      if (response) {
        reFetchTrackerData();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setEditUserMode(false);
    }
  };

  const handleClose = () => {
    setEditUserMode(false);
  };

  const formItemChangeHandler = ({ target }) => {
    setUpdateUser({
      ...updateUser,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
        }}
      >
        {userDeatils ? (
          fields.map(({ fieldName, propName, inputType }, index) => (
            <FormControl
              key={index}
              variant="outlined"
              fullWidth={true}
              required
              sx={{ marginBottom: "1rem" }}
            >
              <InputLabel htmlFor={fieldName}>{fieldName}</InputLabel>
              <OutlinedInput
                autoComplete="off"
                id={propName}
                name={propName}
                type={inputType}
                label={fieldName}
                onChange={formItemChangeHandler}
                error={!!inputsError[propName]}
                value={updateUser[propName]}
                endAdornment={
                  <InputAdornment position="end">
                    <PersonOutlineIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          ))
        ) : (
          <Box />
        )}
        <ButtonGroup sx={{ float: "right", marginLeft: "auto" }}>
          <Button
            onClick={handleClose}
            color="warning"
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
      </Box>
    </>
  );
};
export default EditTrackerUser;
