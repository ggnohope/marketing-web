import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import { services } from "../Assets/data";

const Service = () => {
  return (
    <Box
      id="service"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "white",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 100% 0%, rgba(99,102,241,0.1) 0%, transparent 50%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "left", mb: 8 }}>
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
            Our Services
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
              lineHeight: 1.2,
              background: "linear-gradient(to right, #1e293b, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The service we offer is specifically designed to meet your needs
          </Typography>
        </Box>

        <Grid container spacing={5} justifyContent="center">
          {services.map(({ title, desc, image }, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 4,
                  borderRadius: 8,
                  boxShadow: "0 8px 32px rgba(99,102,241,0.12)",
                  transition: "all 0.3s",
                  minHeight: 280,
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  background: "#fff",
                  width: "100%",
                  mx: "auto",
                  "&:hover": {
                    boxShadow: "0 16px 48px rgba(99,102,241,0.18)",
                    transform: "translateY(-8px) scale(1.03)",
                  },
                }}
              >
                {image && (
                  <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{
                      width: 180,
                      height: 180,
                      borderRadius: 6,
                      objectFit: "cover",
                      mb: 1,
                      boxShadow: "0 6px 24px rgba(99,102,241,0.15)",
                    }}
                  />
                )}

                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 0.5, textAlign: "center" }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", textAlign: "center", mb: 0 }}
                >
                  {desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Service;
