import { Box } from "@mui/material";
import AboutCard from "../AboutCard/AboutCard";
import sec1 from "../../assets/sec1.webp";
import sec3 from "../../assets/sec3.webp";
const About = () => {
  return (
    <Box
      sx={{
        padding: "50px",
        borderBottom: "10px solid black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AboutCard
        image={sec1}
        title="AS LOW AS 0% APR FINANCING UPON APPROVAL WITH AFFIRM"
        description="Affirm provides flexible payment solutions, allowing you to buy better and pay over time."
        imagePosition="left"
        ButtonText="Learn More"
      />{" "}
      <AboutCard
        image={sec3}
        title="CHOOSE WITH CONFIDENCE"
        description="Remove the guesswork in choosing your upholstery design by ordering complimentary swatches."
        imagePosition="right"
        ButtonText="Order Swatches"
      />{" "}
      <AboutCard
        image={sec3}
        title="Complimentary Design Services"
        description="Let's create your dream space together"
        imagePosition="left"
        ButtonText="Book A Consultation"
      />{" "}
    </Box>
  );
};

export default About;
