import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Box } from "@mui/material";

import Home from "./Landing";

const theme = createTheme({
  palette: {
    primary: {
      main: "#393536",
    },
  },

  typography: {
    h2: {
      textAlign: "center",
      paddingBottom: "3rem",
      paddingTop: "3rem",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Home />
      </Box>
    </ThemeProvider>
  );
}
