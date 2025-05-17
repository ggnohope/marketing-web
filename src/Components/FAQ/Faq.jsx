import { Box, Container, Typography } from "@mui/material";
import { menuItems } from "../Assets/data";
import AccordionMenu from "./AccordionMenu";

const Faq = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 6,
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          Frequently Asked Questions
        </Typography>
        <AccordionMenu items={menuItems} />
      </Container>
    </Box>
  );
};

export default Faq;
