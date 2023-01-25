import logo from "./logo.svg";
import "./App.css";
import SignIn from "./sign-in";
import MySignIn from "./Pages/MySignIn";
import { CssBaseline } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles"
import MySignup from "./Pages/MySignup";
import SignUp from "./sign-up";

function App() {
  const theme = createTheme();
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <MySignIn /> */}
        <MySignup />
        {/* <SignUp /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
