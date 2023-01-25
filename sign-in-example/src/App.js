import logo from "./logo.svg";
import "./App.css";
import SignIn from "./sign-in";
import MySignIn from "./MySignIn";
import { CssBaseline } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles"

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
        <MySignIn />
      </ThemeProvider>
    </>
  );
}

export default App;
