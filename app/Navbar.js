import {AppBar,Avatar,Box,Button,CardContent,Divider,Drawer,List,ListItemButton,ListItemText,Stack,Typography} from "@mui/material";
import Link from "next/link";
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import React, { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Oswald } from "next/font/google";
import { purple } from "@mui/material/colors";
import { ColorModeContext } from "./page";
const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {toggleColorMode}=useContext(ColorModeContext)
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
              onClick={() => {
                window.scroll({ top: 7500, behavior: "smooth" });
              }}
            >
              Contacts
            </Button>
           <CardContent> <MaterialUISwitch onChange={toggleColorMode} /></CardContent>
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
            
              <ListItemButton
              onClick={() => {
                window.scroll({ top: 6140, behavior: "smooth" });
              }}>
                <ListItemText primary="Contact" sx={{p:"2px 20px"}} />
              </ListItemButton>
            
          </List>
        </Drawer>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
