import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#F7ECEC",
      top: 0,
      justifyContent: "space-between",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 300px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center", zIndex: "1" }}>
      <img src="./utils/icon.png" alt="" srcset="" />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
