import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  CircularProgress,
  CardActionArea,
} from "@mui/material";

function StatCard({ name, url, logo }) {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "35vh", // Fixed height for the card
    width: "100%", // Use 100% of the grid column width
    boxSizing: "border-box", // Include padding and border in the element's total width and height
  };

  const imageStyle = {
    maxHeight: "85%", // The image can be as tall as 85% of its container
    maxWidth: "100%", // The image can be as wide as its container
    objectFit: "contain", // Keep the aspect ratio of the image
  };

  return (
    <Grid item xs={12} sm={12} md={4}>
      {" "}
      {/* Adjust grid sizes as needed */}
      <Card style={cardStyle}>
        <CardActionArea
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: "100%" }}
        >
          <CardContent
            style={{
              padding: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80%",
            }}
          >
            <img src={`${logo}`} alt={`${name} logo`} style={imageStyle} />
          </CardContent>
          <Typography
            variant="h5"
            textAlign="center"
            style={{ marginTop: "auto" }}
          >
            {name}
          </Typography>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

function StatsGrid() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch(`/libraries.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setStats(data);
      })
      .catch((error) => {
        console.error("Error fetching stats:", error);
      });
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 4, pb: 3 }}>
      {stats ? (
        <Grid container spacing={2} justifyContent="center">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              name={stat.name}
              url={stat.url}
              logo={stat.logo}
            />
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
}

export default StatsGrid;
