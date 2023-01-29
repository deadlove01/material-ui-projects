import logo from "./logo.svg";
import "./App.css";
import SignIn from "./Examples/sign-in";
import SignUp from "./Examples/sign-up";
import MySignIn from "./Pages/MySignIn";
import { CssBaseline } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles"
import MySignup from "./Pages/MySignup";
import StickyFooter from "./Examples/StickyFooter";
import MyStickyFooter from "./Pages/MyStickyFooter";
import SignInSide from "./Examples/sign-in-side";
import MySignInSide from "./Pages/MySignInSide";
import Pricing from "./Examples/pricing";
import MyPricing from "./Pages/MyPricing";
import Album from "./Examples/album";
import MyAlbum from "./Pages/MyAlbum";


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
        {/* <MySignup /> */}
        {/* <SignUp /> */}
        {/* <StickyFooter /> */}
        {/* <MyStickyFooter /> */}
        {/* <SignInSide /> */}
        {/* <MySignInSide /> */}
        {/* <Pricing /> */}
        {/* <MyPricing /> */}
        <MyAlbum />
        {/* <Album /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
