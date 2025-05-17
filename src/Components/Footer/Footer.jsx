import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      id="footer"
      sx={{ backgroundColor: "#1a237e", color: "white", pt: 8, pb: 4 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              INFIGIO
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 3, color: "rgba(255,255,255,0.8)" }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis quam natus dolor consequuntur, cupiditate labore
              velit eos accusamus quibusdam, minima dolorem ipsa. Cupiditate
              doloremque repellat nam, voluptas ipsum odit nihil!
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton color="inherit" sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" sx={{ color: "white" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              COMPANY
            </Typography>
            <Stack component="ul" spacing={1} sx={{ pl: 0, listStyle: "none" }}>
              <Typography component="li" variant="body2">
                Home
              </Typography>
              <Typography component="li" variant="body2">
                About Us
              </Typography>
              <Typography component="li" variant="body2">
                Services
              </Typography>
              <Typography component="li" variant="body2">
                Privacy policy
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              GET IN TOUCH
            </Typography>
            <Stack component="ul" spacing={1} sx={{ pl: 0, listStyle: "none" }}>
              <Typography component="li" variant="body2">
                +23499686548
              </Typography>
              <Typography component="li" variant="body2">
                contact@email.com
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.2)" }} />
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "rgba(255,255,255,0.7)" }}
        >
          Copyright 2024 @Company. All right Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
