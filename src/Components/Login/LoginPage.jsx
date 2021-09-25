import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import imageSrc from "../Assets/pic1.png";
import { isEmpty } from "lodash";
import { useHistory } from "react-router-dom";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright ©PredragStosic "}
      <Link
        color="inherit"
        href="https://github.com/predragstosic1985/tracker-frontend"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github repo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const LoginPage = () => {
  /* eslint-disable no-unused-vars */
  const history = useHistory();
  const initState = {
    username: "",
    password: "",
  };
  const [inputsError, setInputsError] = useState({});
  const [user, setUser] = useState(initState);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     // eslint-disable-next-line no-console
  //     console.log({
  //       email: data.get('email'),
  //       password: data.get('password')
  //     });
  //   };

  const onSubmit = async () => {
    setIsLoading(true);
    const errors = {};
    Object.keys(user).forEach((propName) => {
      if (isEmpty(user[propName])) {
        errors[propName] = { content: "Please add a value" };
      }
    });
    if (!isEmpty(errors)) {
      setInputsError(errors);
      setIsLoading(false);
      return;
    }

    // try {
    //   const res = await API.login({
    //     username: user.username,
    //     password: user.password
    //   });

    //   if (res.status == 200) {
    //     if (res.data.message == 'Failed') alert('Wrong Credentials');
    //     else submitUser(res.data.user);
    //   }
    //   setIsLoading(false);
    // } catch {
    //   setIsLoading(false);
    //   console.log('error catch');
    // }

    // const errors = {};
    // Object.keys(user).forEach(propName => {
    //   if (isEmpty(user[propName])) {
    //     errors[propName] = { content: 'Please add a value' };
    //   }
    // });
    // if (!isEqual(user, authorized)) {
    //   console.log('check your data');
    // }
    // if (isEmpty(errors) && isEqual(user, authorized)) {
    //   submitUser(user);
    //   setIsLoading(false);
    // } else {
    //   setInputsError(errors);
    //   setIsLoading(false);
    // }
  };

  // const submitUser = (user) => {
  //   localStorage.setItem("user", JSON.stringify(user));
  //   localStorage.setItem("isLogin", JSON.stringify(true));
  //   history.push("/dashboard");
  // };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Backdrop open={isLoading}>
        <CircularProgress color="secondary" />
      </Backdrop>
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
              <InputLabel htmlFor="username">Username</InputLabel>
              <OutlinedInput
                autoComplete="off"
                id="username"
                name="username"
                type={"text"}
                label="Username"
                onChange={handleOnChange}
                error={!!inputsError.username}
                value={user.username}
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
    </Grid>
  );
};
export default LoginPage;
