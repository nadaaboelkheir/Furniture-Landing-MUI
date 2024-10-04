/* eslint-disable react/prop-types */
import { Box, Typography, Button } from "@mui/material";

const AboutCard = ({
  image,
  title,
  description,
  imagePosition,
  ButtonText,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "40px",
        backgroundColor:"#fafafa",
        flexDirection: {
          xs: "column",
          md: imagePosition === "left" ? "row" : "row-reverse",
        }, // Change direction based on the imagePosition prop
      }}
    >
      <img src={image} alt="" style={{ width: "50%" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          // width: "50%",
          padding: "80px ",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          {title}
        </Typography>
        <Typography variant="h5">{description}</Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: "50px",
            backgroundColor: "black",
            height: "50px",
            width: "220px",
          }}
        >
          {ButtonText}{" "}
        </Button>
      </Box>
    </Box>
  );
};

export default AboutCard;
