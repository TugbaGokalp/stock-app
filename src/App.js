import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import { grey, blueGrey } from "@mui/material/colors";

import './App.css';
import AppRouter from "./router/AppRouter";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: grey["900"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });

  return (
    <ThemeProvider>
      <AppRouter/>
      <ToastContainer/>
    </ThemeProvider>
  );
}

export default App;
