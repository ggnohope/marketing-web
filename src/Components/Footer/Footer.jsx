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
              Sửa chữa điện Phương Vinh
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 3, color: "rgba(255,255,255,0.8)" }}
            >
              Sửa chữa điện Phương Vinh chuyên lắp đặt và bảo trì máy lạnh, hệ
              thống điện, hệ thống xây dựng và lắp đặt thang máy gia đình tại
              TP.HCM.
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
              CÔNG TY
            </Typography>
            <Stack component="ul" spacing={1} sx={{ pl: 0, listStyle: "none" }}>
              <Typography component="li" variant="body2">
                Trang chủ
              </Typography>
              <Typography component="li" variant="body2">
                Giới thiệu
              </Typography>
              <Typography component="li" variant="body2">
                Dịch vụ
              </Typography>
              <Typography component="li" variant="body2">
                Chính sách bảo mật
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              LIÊN HỆ
            </Typography>
            <Stack component="ul" spacing={1} sx={{ pl: 0, listStyle: "none" }}>
              <Typography component="li" variant="body2">
                Điện thoại: 096 881 43 50
              </Typography>
              <Typography component="li" variant="body2">
                Địa chỉ: 278 Trần Phú, P7, Q5, TP HCM, Ho Chi Minh City, Vietnam
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
          Copyright 2024 © Sửa chữa điện Phương Vinh. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
