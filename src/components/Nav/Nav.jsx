import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Button, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

export default function Nav() {
  const pages = [
    "living",
    "dining",
    "bedrooms",
    "outdoor",
    "office",
    "lighting",
    "rugs",
    "accessories",
    "brand",
    "inspiration",
    "gifts",
    "sales",
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "white",
          color: "black",
          borderBottom: ".5px solid #afafaf",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , fontWeight: "bold",fontSize: "2rem" }}>
            EQ3
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              <HelpOutlineIcon sx={{ fontSize: "2rem", color: "black" }} />
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              <FavoriteBorderIcon sx={{ fontSize: "2rem", color: "black" }} />{" "}
            </Link>
            <Typography>
              <PlaceOutlinedIcon sx={{ fontSize: "2rem", color: "black" }} />
            </Typography>
            <Box sx={{ display: "flex", gap: "5px" ,alignItems: "center"}}>
              <PersonIcon sx={{ fontSize: "2rem", color: "black" }} />
              <Typography>Join / Login to EQ3</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "5px",alignItems: "center" }}>
              <LanguageOutlinedIcon sx={{ fontSize: "2rem", color: "black" }}/>
              <Typography>EN / CAD</Typography>
            </Box>
            <Button variant="outlined" color="inherit" >
              {" "}
              <ShoppingCartOutlinedIcon sx={{  color: "black" }} /> Cart (0)
            </Button>
          </Breadcrumbs>{" "}
        </Toolbar>
      </AppBar>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "white",
          color: "black",
          borderBottom: ".5px solid #afafaf",          height: 70,
          justifyContent: "center",
        }}
      >
        <Toolbar sx={{ height: "100%" }}>
          {pages.map((page) => (
            <Button color="inherit" key={page}>
              {page}
            </Button>
          ))}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #afafaf",
              height: "100%",
              padding: "0 10px",
              width: "20%",
              marginLeft: "auto",
            }}
          >
            <TextField
              placeholder="search...."
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
            />
            <SearchIcon sx={{ color: "gray" }} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          height: "5vh",
          backgroundColor: "orange",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">labour day: enjoy 20%off EQ3</Typography>
      </Box>
    </Box>
  );
}
