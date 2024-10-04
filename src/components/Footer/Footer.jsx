import { Box, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px 0", 
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "30px auto",
            gap: "5px",
          }}
        >
          <Typography
            variant="h5"
            color="inherit"
            sx={{ textAlign: "left", fontWeight: "bold" }}
          >
            EQ3 SHOP{" "}
          </Typography>
          <Link href="/shop" color="gray" underline="none">
            <Typography variant="body1" color="gray">
              Shop All Products
            </Typography>
          </Link>
          <Link href="/collections" color="gray" underline="none">
            <Typography variant="body1" color="gray">
              Collections
            </Typography>
          </Link>
          <Link href="/new-arrivals" color="gray" underline="none">
            <Typography variant="body1" color="gray">
              New Arrivals
            </Typography>
          </Link>
          <Link href="/sale" color="gray" underline="none">
            <Typography variant="body1" color="gray">
              Sale
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "30px auto",
            gap: "5px",
          }}
        >
          <Typography
            variant="h5"
            color="inherit"
            sx={{ textAlign: "left", fontWeight: "bold" }}
          >
            CUSTOMER SERVICE{" "}
          </Typography>
          <Link href="/contact" color="gray" underline="none">
            <Typography variant="body1" color="gray">
              Contact Us
            </Typography>
          </Link>
          <Link href="/faq" color="gray" underline="none">
            <Typography variant="body1" color="gray">
              FAQ
            </Typography>
          </Link>
          <Link href="/returns" color="gray" underline="none">
            <Typography variant="body1" color="gray">
              Returns & Exchanges
            </Typography>
          </Link>
          <Link href="/shipping" color="gray" underline="none">
            <Typography variant="body1" color="gray">
              Shipping Information
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "30px auto",
            gap: "5px",
          }}
        >
          <Typography
            variant="h5"
            color="inherit"
            sx={{ textAlign: "left", fontWeight: "bold" }}
          >
            ABOUT EQ3{" "}
          </Typography>
          <Link href="/about" color="gray" underline="none">
            <Typography variant="body1" color="gray">
              Our Story
            </Typography>
          </Link>
          <Link href="/careers" color="gray" underline="none">
            <Typography variant="body1" color="gray">
              Careers
            </Typography>
          </Link>
          <Link href="/press" color="gray" underline="none">
            <Typography variant="body1" color="gray">
              Press
            </Typography>
          </Link>
          <Link href="/sustainability" color="gray" underline="none">
            <Typography variant="body1" color="gray">
              Sustainability
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #444",
          paddingTop: "25px",
          margin: "30px auto",
        }}
      >
        <Typography
          variant="body2"
          color="inherit"
          sx={{ textAlign: "left", fontSize: "16px" }}
        >
          &copy; {new Date().getFullYear()} EQ3. All Rights Reserved.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Link href="/cookie-policy" color="gray" underline="none">
            <Typography variant="body2" color="inherit">
              Cookie Policy
            </Typography>
          </Link>
          <Link href="/privacy-policy" color="gray" underline="none">
            <Typography variant="body2" color="inherit">
              Privacy Policy
            </Typography>
          </Link>
          <Link href="/terms" color="gray" underline="none">
            <Typography variant="body2" color="inherit">
              Terms of Service
            </Typography>
          </Link>
          <Link href="/help-center" color="gray" underline="none">
            <Typography variant="body2" color="inherit">
              Help Center
            </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Link href="https://www.facebook.com/EQ3" target="_blank">
              <FacebookIcon sx={{ fontSize: "30px", color: "#ffffff" }} />
            </Link>
            <Link href="https://twitter.com/EQ3" target="_blank">
              <TwitterIcon sx={{ fontSize: "30px", color: "#ffffff" }} />
            </Link>
            <Link href="https://www.linkedin.com/company/eq3" target="_blank">
              <LinkedInIcon sx={{ fontSize: "30px", color: "#ffffff" }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
