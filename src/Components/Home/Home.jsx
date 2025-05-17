import React from "react";
import { Box, Container, Typography, Button, Paper } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import img from "../Assets/img1.jpg";

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          <Box sx={{ flex: 1, color: "white" }}>
            <Paper
              elevation={0}
              sx={{
                display: "inline-block",
                px: 2,
                py: 1,
                mb: 2,
                backgroundColor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: 3,
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  letterSpacing: 1,
                }}
              >
                Welcome to Our Agency
              </Typography>
            </Paper>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.5rem", md: "4rem" },
                lineHeight: 1.2,
                mb: 3,
                background: "linear-gradient(to right, #ffffff, #e2e8f0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              We are a creative digital agency
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                mb: 4,
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.6,
              }}
            >
              We help ambitious businesses like yours generate more profits by
              building awareness, driving web traffic, connecting with
              customers, and growing overall sales.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#f97316",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#ea580c",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 16px rgba(249,115,22,0.3)",
                  },
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={
                  <PlayCircleIcon
                    sx={{
                      fontSize: "2rem",
                      transition: "all 0.3s ease",
                    }}
                  />
                }
                sx={{
                  borderColor: "white",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    transform: "translateY(-2px)",
                    "& .MuiSvgIcon-root": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                Watch Video
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={img}
              alt="Hero"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 4,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                position: "relative",
                zIndex: 1,
                transition: "all 0.3s ease",
                filter: "brightness(1.05) contrast(1.05)",
                "&:hover": {
                  transform: "translateY(-10px)",
                  filter: "brightness(1.1) contrast(1.1)",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
                },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
