import { AppBar, Button, CardContent, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <AppBar sx={{ backgroundColor: "#DC143C" }}>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <CardContent>
          <Typography
            sx={{ color: "black", fontSize: "30px", fontWeight: "bold" }}
          >
            H
          </Typography>
        </CardContent>
        <Stack direction="row">
          <Button sx={{ color: "black", fontWeight: "bold", fontSize: "16px" }}>
            Home
          </Button>
          <Button sx={{ color: "black", fontWeight: "bold", fontSize: "16px" }}>
            About
          </Button>
          <Button sx={{ color: "black", fontWeight: "bold", fontSize: "16px" }}>
            Projects
          </Button>
          <Button
            onClick={() => {
              navigate("/contact");
            }}
            sx={{ color: "black", fontWeight: "bold", fontSize: "16px" }}
          >
            Contacts
          </Button>
          <CardContent>
            <Button>
              <MenuIcon sx={{ fontSize: "50px", color: "black" }} />
            </Button>
          </CardContent>
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
