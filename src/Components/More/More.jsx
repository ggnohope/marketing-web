import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { more } from "../Assets/data";
import img from "../Assets/img2.jpg";

const More = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            {more.map(({ head, desc }, idx) => (
              <Box key={idx} sx={{ mb: 5 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                  }}
                >
                  {head}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 3, color: "text.secondary" }}
                >
                  {desc}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href="#contact"
                  sx={{ borderRadius: 2, textTransform: "none", px: 4 }}
                >
                  Tìm hiểu thêm
                </Button>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={img}
                alt="Thông tin thêm"
                style={{
                  maxWidth: "100%",
                  borderRadius: 16,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default More;
