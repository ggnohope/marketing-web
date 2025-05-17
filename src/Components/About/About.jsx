import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import img1 from "../Assets/img3.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img1.jpg";
import { about } from "../Assets/data";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#f8fafc",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          background:
            "radial-gradient(circle at 0% 0%, rgba(99,102,241,0.1) 0%, transparent 50%)",
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={8} alignItems="center" justifyContent="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                position: "relative",
                minWidth: { xs: 280, md: 440 },
                maxWidth: { xs: 420, md: 520 },
                minHeight: { xs: 380, md: 480 },
                height: { xs: 380, md: 480 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
              }}
            >
              {/* Hình lớn */}
              <Box
                component="img"
                src={img1}
                alt="About Us Main"
                sx={{
                  width: { xs: "85%", md: "410px" },
                  height: { xs: "260px", md: "390px" },
                  objectFit: "cover",
                  borderRadius: 4,
                  boxShadow: "0 12px 40px rgba(99,102,241,0.18)",
                  position: "relative",
                  zIndex: 2,
                  mx: "auto",
                }}
              />
              {/* Hình nhỏ 1 */}
              <Box
                component="img"
                src={img2}
                alt="About Us Small 1"
                sx={{
                  width: { xs: "48%", md: "170px" },
                  height: { xs: "110px", md: "140px" },
                  objectFit: "cover",
                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(99,102,241,0.20)",
                  position: "absolute",
                  bottom: 32,
                  right: { xs: 0, md: 30 },
                  zIndex: 3,
                  border: "5px solid #fff",
                  background: "#fff",
                  transform: "rotate(8deg)",
                }}
              />
              {/* Hình nhỏ 2 */}
              <Box
                component="img"
                src={img3}
                alt="About Us Small 2"
                sx={{
                  width: { xs: "40%", md: "140px" },
                  height: { xs: "90px", md: "110px" },
                  objectFit: "cover",
                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(99,102,241,0.20)",
                  position: "absolute",
                  bottom: -10,
                  right: { xs: 60, md: 120 },
                  zIndex: 2,
                  border: "5px solid #fff",
                  background: "#fff",
                  transform: "rotate(-7deg)",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  mb: 2,
                  display: "inline-block",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 3,
                    backgroundColor: "primary.main",
                    borderRadius: 2,
                  },
                }}
              >
                About Us
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  lineHeight: 1.2,
                  background: "linear-gradient(to right, #1e293b, #6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                We Give The Best Solution To Grow Up your business
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "text.secondary",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                We have all hands on deck to provide you with the best service
                that suits your business
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {about.map(({ number, head, text }, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 3,
                      backgroundColor: "transparent",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "rgba(99,102,241,0.05)",
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        minWidth: 60,
                        height: 60,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "primary.main",
                        borderRadius: "50%",
                        color: "white",
                        fontWeight: 700,
                        fontSize: "1.5rem",
                        transition: "all 0.3s ease",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          border: "2px solid",
                          borderColor: "primary.main",
                          borderRadius: "50%",
                          opacity: 0.2,
                          transform: "scale(1.2)",
                          transition: "all 0.3s ease",
                        },
                        "&:hover": {
                          transform: "scale(1.1)",
                          "&::after": {
                            transform: "scale(1.3)",
                          },
                        },
                      }}
                    >
                      {number}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "text.primary",
                        }}
                      >
                        {head}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.7,
                        }}
                      >
                        {text}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
