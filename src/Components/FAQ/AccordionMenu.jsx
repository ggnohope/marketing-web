import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";

const AccordionMenu = ({ items }) => {
  return (
    <Box>
      {items.map((item, index) => (
        <Accordion
          key={index}
          sx={{
            "&:before": {
              display: "none",
            },
            boxShadow: "none",
            border: "1px solid",
            borderColor: "divider",
            "&:not(:last-child)": {
              mb: 2,
            },
            "&:first-of-type": {
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            },
            "&:last-of-type": {
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              "& .MuiAccordionSummary-content": {
                my: 2,
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "text.primary",
              }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                pb: 2,
              }}
            >
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

AccordionMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default AccordionMenu;
