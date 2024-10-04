import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.jpeg";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.jpeg";
import product5 from "../../assets/product5.png";
import product6 from "../../assets/product6.png";
import product7 from "../../assets/product7.png";
import product8 from "../../assets/product8.png";
import product9 from "../../assets/product9.png";
import product10 from "../../assets/product10.png";
import product11 from "../../assets/product11.png";
import product12 from "../../assets/product12.png";
const Categories = () => {
  const categories = [
    {
      name: "Living",
      image: product1,
    },
    {
      name: "Bedroom",
      image: product2,
    },
    {
      name: "Office",
      image: product3,
    },
    {
      name: "Kitchen",
      image: product4,
    },
    {
      name: "Dining",
      image: product5,
    },
    {
      name: "Outdoor",
      image: product6,
    },
    {
      name: "Lighting",
      image: product7,
    },
    {
      name: "Bathroom",
      image: product8,
    },
    {
      name: "Decor",
      image: product9,
    },
    {
      name: "Storage",
      image: product10,
    },
    {
      name: "Textiles",
      image: product11,
    },
    {
      name: "Kids",
      image: product12,
    },
  ];
  return (
    <Box
      sx={{
        padding: "50px",
        borderBottom: "10px solid black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "40px" }}>
        Shop By Categories
      </Typography>
      <ImageList sx={{ width: "100%" }} cols={4} gap={15}>
        {categories.map((item) => (
          <ImageListItem
            key={item.image}
            sx={{
              backgroundColor: "#fafafa",
              borderRadius: "10px",
              direction: "column",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "120px",
              padding: "30px",

            }}
          >
            <img
              srcSet={item.image}
              src={`${item.image}`}
              alt={item.name}
              loading="lazy"
              style={{ width: "50%", height: "50%", objectFit: "cover" }}
            />
            <ImageListItemBar position="below" title={item.name} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Categories;
