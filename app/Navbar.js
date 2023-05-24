import {
  AppBar,
  Avatar,
  Box,
  Button,
  CardContent,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Oswald } from "next/font/google";
import { blue, deepPurple, purple, yellow } from "@mui/material/colors";
const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar className={oswald.className} sx={{ backgroundColor: "white" }}>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction="row" sx={{ p: "9px 47px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ bgcolor: purple[500], width: "34px", height: "35px" }}
            >
              H
            </Avatar>
          </Box>
          <CardContent>
            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "16px", lg: "18px" },
                fontWeight: "bold",
                pt: "8px",
              }}
            >
              HARSH CHOUDHARY
            </Typography>
          </CardContent>
        </Stack>
        <CardContent sx={{ display: { xs: "none", sm: "flex" } }}>
          <Stack direction="row" columnGap={6}>
            <Button
              sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: { sm: "1.7vw", md: "1.3vw", lg: ".8vw" },
              }}
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              onClick={() => {
                window.scroll({ top: 900, behavior: "smooth" });
              }}
              sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: { sm: "1.7vw", md: "1.3vw", lg: ".8vw" },
              }}
            >
              About
            </Button>
            <Button
              sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: { sm: "1.7vw", md: "1.3vw", lg: ".8vw" },
              }}
              onClick={() => {
                window.scroll({ top: 1900, behavior: "smooth" });
              }}
            >
              Projects
            </Button>
            <Button
              sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: { sm: "1.7vw", md: "1.3vw", lg: ".8vw" },
              }}
            >
              Contacts
            </Button>
            <CardContent></CardContent>
          </Stack>
        </CardContent>
        <Button
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={() => {
            setOpen(true);
          }}
        >
          <MenuIcon sx={{ fontSize: "50px", color: "black" }} />
        </Button>
        <Drawer
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <List>
            
              <ListItemButton href="/">
                <ListItemText primary="Home" sx={{p:"2px 20px"}} />
              </ListItemButton>
            
              <Divider/>
            
              <ListItemButton
                onClick={() => {
                  window.scroll({ top: 700, behavior: "smooth" });
                }}
              >
                <ListItemText primary="About" sx={{p:"2px 20px"}} />
              </ListItemButton>
            
              <Divider/>
            
              <ListItemButton
                onClick={() => {
                  window.scroll({ top: 2200, behavior: "smooth" });
                }}
              >
                <ListItemText primary="Projects" sx={{p:"2px 20px"}} />
              </ListItemButton>
            
              <Divider/>
            
              <ListItemButton>
                <ListItemText primary="Contact" sx={{p:"2px 20px"}} />
              </ListItemButton>
            
          </List>
        </Drawer>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
