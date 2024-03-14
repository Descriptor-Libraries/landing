import { useState } from "react";
import { useTheme } from "@mui/material/styles";

import { Typography, Box, Container } from "@mui/material";

import LibraryGrid from "./components/LibraryGrid";

const Badge = ({ isMobile }) => {
  const displayStyle = {
    maxWidth: isMobile ? "120px" : "350px", // This sets the maximum width of the image
    height: "45vh", // Set the height of the image to 20% of the viewport height (box is 35% of vh)
  };

  return (
    <img
      src={`/descriptor-libraries-dark.svg`}
      style={displayStyle}
      alt="logo"
    />
  );
};

function Home() {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          padding: 2,
          height: !isMobile && "40vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <Badge isMobile={isMobile} />
          <Typography
            variant={isMobile ? "h4" : "h2"}
            color="white"
          ></Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          mt: 3,
          pb: 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Typography>
            The Descriptor Libraries project is a collaborative effort between
            The Molecular Sciences Software Institute (MolSSI) and the Center
            for Computer Assisted Synthesis (C-CAS), both funded by the National
            Science Foundation. The Descriptor Libraries project combines
            molecular libraries for various chemical applications from C-CAS in
            an accessible web application and software framework developed by
            the MolSSI.
          </Typography>
        </Container>

        <LibraryGrid />
      </Box>
    </>
  );
}

export default Home;
