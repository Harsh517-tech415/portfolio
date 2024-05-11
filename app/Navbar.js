import { useAppDispatch } from "@/lib/store/hook";
import {
  scrollToAbout,
  scrollToContact,
  scrollToProject,
  toggleMode,
} from "@/lib/store/reducer/slice.theme";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  CardContent,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
// import { Oswald } from "next/font/google";
import { useState } from "react";
// const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <AppBar
      id="navbar"
      className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:bg-gradient-to-r dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400"
      component={CardContent}
    >
      <Stack
        direction="row"
        className="dark:text-white"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction="row" className="items-center space-x-2">
          <Avatar sx={{ bgcolor: purple[500], width: "34px", height: "35px" }}>
            H
          </Avatar>
          <Typography className="text-lg font-bold">HARSH CHOUDHARY</Typography>
        </Stack>
        <Stack
          direction="row"
          columnGap={6}
          component={CardContent}
          className="sm:flex items-center"
        >
          <Typography
            className="cursor-pointer text-md font-semibold"
            onClick={() => (window.location.href = "/")}
          >
            Home
          </Typography>
          <Typography
            className="cursor-pointer text-md font-semibold"
            onClick={() => dispatch(scrollToAbout())}
          >
            About
          </Typography>
          <Typography
            className="cursor-pointer text-md font-semibold"
            onClick={() => dispatch(scrollToProject())}
          >
            Projects
          </Typography>
          <Typography
            className="cursor-pointer text-md font-semibold"
            onClick={() => dispatch(scrollToContact())}
          >
            Contacts
          </Typography>
          <CardContent>
            <MaterialUISwitch onChange={() => dispatch(toggleMode())} />
          </CardContent>
        </Stack>

        <Typography
          className="cursor-pointer"
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon sx={{ fontSize: "50px", color: "black" }} />
        </Typography>
        <Drawer
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <List>
            <ListItemButton href="/">
              <ListItemText primary="Home" sx={{ p: "2px 20px" }} />
            </ListItemButton>

            <Divider />

            <ListItemButton onClick={() => dispatch(scrollToAbout())}>
              <ListItemText primary="About" sx={{ p: "2px 20px" }} />
            </ListItemButton>

            <Divider />

            <ListItemButton onClick={() => dispatch(scrollToProject())}>
              <ListItemText primary="Projects" sx={{ p: "2px 20px" }} />
            </ListItemButton>

            <Divider />

            <ListItemButton onClick={() => dispatch(scrollToContact())}>
              <ListItemText primary="Contact" sx={{ p: "2px 20px" }} />
            </ListItemButton>
          </List>
        </Drawer>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
