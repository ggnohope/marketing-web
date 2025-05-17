import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6366f1", // Indigo
      contrastText: "#fff",
    },
    secondary: {
      main: "#f59e42", // Orange
      contrastText: "#fff",
    },
    background: {
      default: "#f8fafc", // Light gray
      paper: "#fff",
    },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 8px 32px rgba(99,102,241,0.08)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 600,
          boxShadow: "0 2px 8px rgba(99,102,241,0.08)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0 8px 32px rgba(99,102,241,0.10)",
        },
      },
    },
  },
});

export default theme;
