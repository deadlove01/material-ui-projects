import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MySignupComponent from "../Components/MySignupComponent";

const MySignInSide = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} elevation={6} square>
        <MySignupComponent />
      </Grid>
    </Grid>
  );
};

export default MySignInSide;
