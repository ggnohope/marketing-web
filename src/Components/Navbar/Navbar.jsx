import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navlinks } from "../Assets/data";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={1}
      sx={{ backgroundColor: "white" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for desktop */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 800,
              color: "primary.main",
              textDecoration: "none",
            }}
          >
            Infigio
          </Typography>

          {/* Mobile menu */}
          {isMobile && (
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  "& .MuiPaper-root": {
                    minWidth: "200px",
                  },
                }}
              >
                {navlinks.map((item) => (
                  <MenuItem
                    key={item.id}
                    onClick={handleCloseNavMenu}
                    sx={{
                      justifyContent: "center",
                      py: 1.5,
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        width: "100%",
                        fontWeight: 700,
                      }}
                    >
                      <a
                        href={item.link}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          display: "block",
                          width: "100%",
                        }}
                      >
                        {item.title}
                      </a>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          {/* Logo for mobile */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 800,
              color: "primary.main",
              textDecoration: "none",
            }}
          >
            Infigio
          </Typography>

          {/* Desktop menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 2,
            }}
          >
            {navlinks.map((item) => (
              <Button
                key={item.id}
                href={item.link}
                sx={{
                  my: 2,
                  color: "text.primary",
                  display: "block",
                  fontWeight: 700,
                  minWidth: "100px",
                  textAlign: "center",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>

          {/* Contact button */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="contained"
              color="primary"
              href="#contact"
              sx={{
                borderRadius: 2,
                textTransform: "none",
                px: 3,
                fontWeight: 700,
              }}
            >
              Contact us
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
