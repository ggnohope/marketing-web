import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";
import { feedback } from "../Assets/data";

const Feedback = () => {
  return (
    <Box
      id="feedback"
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
            "radial-gradient(circle at 0% 100%, rgba(99,102,241,0.1) 0%, transparent 50%)",
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
            Testimonials
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
              lineHeight: 1.2,
              mb: 2,
              background: "linear-gradient(to right, #1e293b, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Here&apos;s what our satisfied clients have to say about our work
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {feedback.map(({ image, name, company, comment }, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  backgroundColor: "white",
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(99,102,241,0.1)",
                    borderColor: "primary.main",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Avatar
                      src={image}
                      alt={name}
                      sx={{
                        width: 64,
                        height: 64,
                        mr: 2,
                        border: "2px solid",
                        borderColor: "primary.main",
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                        }}
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                        }}
                      >
                        {company}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Rating
                      value={5}
                      readOnly
                      sx={{
                        color: "primary.main",
                        "& .MuiRating-iconFilled": {
                          color: "primary.main",
                        },
                      }}
                    />
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontStyle: "italic",
                      lineHeight: 1.8,
                      position: "relative",
                      "&::before": {
                        content: '"""',
                        position: "absolute",
                        top: -20,
                        left: -10,
                        fontSize: "4rem",
                        color: "primary.main",
                        opacity: 0.2,
                        fontFamily: "serif",
                      },
                    }}
                  >
                    {comment}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Feedback;
