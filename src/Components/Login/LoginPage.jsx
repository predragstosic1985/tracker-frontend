import React, { useState, useEffect, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CredentialsModal from "../Modals/CredentialsModal";
import imageSrc from "../Assets/pic1.png";
import { isEmpty, isEqual } from "lodash";
import { loginUser } from "../../services/services";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright ©PredragStosic "}
      <br />
      <Link
        color="inherit"
        href="https://github.com/predragstosic1985/tracker-frontend"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github repo frontend
      </Link>
      <br />
      <Link
        color="inherit"
        href="https://github.com/predragstosic1985/tracker-backend"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github repo backend
      </Link>{" "}
      <br />
      {new Date().getFullYear()}
    </Typography>
  );
};

const LoginPage = () => {
  const { dispatch } = useContext(AuthContext);
  const authorized = {
    email: "user@auth.com",
    password: "user1234",
  };
  const history = useHistory();
  const initState = {
    email: "",
    password: "",
  };
  const [inputsError, setInputsError] = useState({});
  const [user, setUser] = useState(initState);
  const [showPassword, setShowPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const errors = { ...inputsError };
    Object.keys(errors).forEach((propName) => {
      if (!isEmpty(user[propName])) {
        delete errors[propName];
      }
    });
    setInputsError(errors);
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOnChange = (e, data) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async () => {
    const errors = {};
    Object.keys(user).forEach((propName) => {
      if (isEmpty(user[propName])) {
        errors[propName] = { content: "Please add a value" };
      }
    });
    if (!isEmpty(errors)) {
      setInputsError(errors);
    } else if (!isEqual(user, authorized)) {
      setOpenModal(true);
    } else {
      postUser();
    }
  };

  const postUser = async () => {
    try {
      const response = await loginUser(user);

      if (response) {
        history.push("/tracker");
        dispatch({
          type: "set",
          token: response.data.token,
          refreshToken: response.data.refreshToken,
          email: response.data.email,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          // backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundImage: `url(${imageSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <FormControl
              variant="outlined"
              fullWidth={true}
              required
              sx={{ marginBottom: "1rem" }}
            >
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                autoComplete="off"
                id="email"
                name="email"
                type={"text"}
                label="Email"
                onChange={handleOnChange}
                error={!!inputsError.email}
                value={user.email}
                endAdornment={
                  <InputAdornment position="end">
                    <PersonOutlineIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl variant="outlined" fullWidth={true} required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                label="Password"
                name="password"
                autoComplete="off"
                error={!!inputsError.password}
                value={user.password}
                type={showPassword ? "text" : "password"}
                onChange={handleOnChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              variant="contained"
              onClick={onSubmit}
              fullWidth={true}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
      <CredentialsModal openModal={openModal} setOpenModal={setOpenModal} />
    </Grid>
  );
};
export default LoginPage;
