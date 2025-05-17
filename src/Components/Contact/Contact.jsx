import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Stack,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <Box
      id="contact"
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
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "white",
            boxShadow: "0 20px 40px rgba(99,102,241,0.1)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 4,
              textAlign: "center",
              background: "linear-gradient(to right, #1e293b, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get In Touch
          </Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} md={5}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "text.primary",
                }}
              >
                Let&apos;s Talk Business
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "text.secondary",
                  lineHeight: 1.8,
                }}
              >
                Type something very very catchy that will make your potential
                clients send a message and make further enquiry about your
                business
              </Typography>
              <Stack spacing={3}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(99,102,241,0.05)",
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  <IconButton
                    sx={{
                      backgroundColor: "rgba(99,102,241,0.1)",
                      color: "primary.main",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                      },
                    }}
                  >
                    <EmailIcon />
                  </IconButton>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography variant="body1">
                      chloegates@gmail.com
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(99,102,241,0.05)",
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  <IconButton
                    sx={{
                      backgroundColor: "rgba(99,102,241,0.1)",
                      color: "primary.main",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                      },
                    }}
                  >
                    <PhoneIcon />
                  </IconButton>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Phone
                    </Typography>
                    <Typography variant="body1">+234678900</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(99,102,241,0.05)",
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  <IconButton
                    sx={{
                      backgroundColor: "rgba(99,102,241,0.1)",
                      color: "primary.main",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                      },
                    }}
                  >
                    <LocationOnIcon />
                  </IconButton>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Location
                    </Typography>
                    <Typography variant="body1">LA, Nigeria</Typography>
                  </Box>
                </Box>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "stretch",
                width: "100%",
              }}
            >
              <Stack spacing={3} sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "primary.main",
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "primary.main",
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={5}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "primary.main",
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    px: 4,
                    py: 1.5,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 16px rgba(99,102,241,0.2)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
