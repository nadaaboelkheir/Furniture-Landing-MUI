import hero from "../../assets/hero2.jpeg";
import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box sx={{ padding: "50px" ,borderBottom: "10px solid black" }}>
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1,
            position: "absolute",
            top: "80%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textTransform: "uppercase",
              marginBottom: "20px",
              color: "white",
            }}
          >
            maximize your space
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textTransform: "capitalize",
              marginBottom: "20px",
              color: "white",
            }}
          >
            make every square inch count with Booms generous storage components
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
