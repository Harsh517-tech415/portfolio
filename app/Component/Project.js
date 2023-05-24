import {
  Box,
  CardContent,
  Stack,
  Typography,
  Divider,
  Chip,
  Button,
  Dialog,
  Card,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import lap1 from "../Media/lap1.png";
import lap2 from "../Media/lap2.png";
import lap3 from "../Media/lap3.png";
import lap4 from "../Media/lap4.png";
import desk1 from "../Media/desk1.png";
import desk2 from "../Media/desk2.png";
import desk3 from "../Media/desk3.png";
import desk4 from "../Media/desk4.png";
import tab1 from "../Media/tab1.png";
import tab2 from "../Media/tab2.png";
import tab3 from "../Media/tab3.png";
import tab4 from "../Media/tab4.png";
import mobile1 from "../Media/mobile1.png";
import mobile2 from "../Media/mobile2.png";
import mobile3 from "../Media/mobile3.png";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CloseIcon from "@mui/icons-material/Close";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Project = () => {
  const [value, setValue] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [site, setSite] = React.useState("");

  const [openDialog, setOpenDialog] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (value == 0) {
      setWidth("1366px");
      setHeight("768px");
    } else if (value == 1) {
      setWidth("1420px");
      setHeight("700px");
    } else if (value == 2) {
      setWidth("768px");
      setHeight("900px");
    } else if (value == 3) {
      setWidth("390px");
      setHeight("844px");
    }
  }, [value]);
  return (
    <Box>
      <CardContent
        sx={{
          textAlign: "center",
          letterSpacing: "2px",
          fontWeight: "bold",
          fontSize: "38px",
        }}
      >
        PROJECTS
      </CardContent>
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            height: "5px",
            backgroundColor: "purple",
            content: '""',
            width: "3rem",
            borderRadius: "25px",
          }}
        ></Box>
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <CardContent
          sx={{
            display: "flex",
            textAlign: "center",
            textAlignLast: "center",
            color: "grey",
            fontSize: "16px",
            lineHeight: 1.7,
            letterSpacing: "1px",
          }}
        >
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </CardContent>
      </CardContent>
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <Stack sx={{ p: "100px 28px", ml: "10%", mr: "10%" }}>
          <Stack direction={{ xs: "column", lg: "row" }}>
            <Box sx={{ width: { lg: "40%" } }}>
              <Tabs
                textColor="secondary"
                indicatorColor="secondary"
                centered
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab icon={<LaptopMacIcon />} />
                <Tab icon={<PersonalVideoIcon />} />
                <Tab icon={<TabletMacIcon />} />
                <Tab icon={<SmartphoneIcon />} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Image src={lap1} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Image src={desk1} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Image src={tab1} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Image src={mobile1} />
              </TabPanel>
            </Box>
            <Box sx={{ width: { lg: "40%" } }}>
              <CardContent sx={{ fontWeight: "bold", fontSize: "18px" }}>
                FitFinder <Chip label="Jan 2023- Mar 2023" color="success" />
              </CardContent>
              <CardContent>
                Unlock your fitness potential with FitFinder - the ultimate
                platform tailored for passionate fitness enthusiasts. Discover a
                wide range of personalized workouts, curated resources, and
                tools designed to empower and inspire you on your fitness
                journey. Embrace a healthier, stronger, and more fulfilling
                lifestyle with FitFinder as your trusted companion.
              </CardContent>
              <Button
                onClick={() => {
                  setSite("https://main--fit-finder.netlify.app/");
                  setOpenDialog(true);
                }}
              >
                <CardContent
                  variant="contained"
                  sx={{
                    backgroundColor: "purple",
                    color: "white",
                    borderRadius: "30px",
                    p: "12px 30px",
                  }}
                >
                  Preview
                </CardContent>
              </Button>{" "}
              <Button
                variant="outlined"
                color="secondary"
                sx={{ borderRadius: "30px", fontSize: "14px", p: "12px 30px" }}
              >
                Visit Site
              </Button>
            </Box>
          </Stack>
          <Divider />

          <Stack direction={{ xs: "column", lg: "row" }}>
            <Box sx={{ width: { lg: "40%" } }}>
              <Tabs
                textColor="secondary"
                indicatorColor="secondary"
                centered
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab icon={<LaptopMacIcon />} />
                <Tab icon={<PersonalVideoIcon />} />
                <Tab icon={<TabletMacIcon />} />
                <Tab icon={<SmartphoneIcon />} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Image src={lap2} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Image src={desk2} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Image src={tab2} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Image src={mobile2} />
              </TabPanel>
            </Box>
            <Box sx={{ width: { lg: "40%" } }}>
              <CardContent sx={{ fontWeight: "bold", fontSize: "18px" }}>
                campusSync <Chip label="Apr 2023- May 2023" color="success" />
              </CardContent>
              <CardContent>
                Enhance campus communication with CampusSync - the go-to
                platform for colleges and schools to send important
                notifications to students. Stay informed about events,
                deadlines, and essential information effortlessly. Experience
                seamless connectivity and effective communication with
                CampusSync.
              </CardContent>
              <Button
                onClick={() => {
                  setSite("https://campusync.netlify.app");
                  setOpenDialog(true);
                }}
              >
                <CardContent
                  variant="contained"
                  sx={{
                    backgroundColor: "purple",
                    color: "white",
                    borderRadius: "30px",
                    p: "12px 30px",
                  }}
                >
                  Preview
                </CardContent>
              </Button>{" "}
              <Button
                variant="outlined"
                color="secondary"
                sx={{ borderRadius: "30px", fontSize: "14px", p: "12px 30px" }}
              >
                Visit Site
              </Button>
            </Box>
          </Stack>
          <Divider />
          <Stack direction={{ xs: "column", lg: "row" }}>
            <Box sx={{ width: { lg: "40%" } }}>
              {" "}
              <Tabs
                textColor="secondary"
                indicatorColor="secondary"
                centered
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab icon={<LaptopMacIcon />} />
                <Tab icon={<PersonalVideoIcon />} />
                <Tab icon={<TabletMacIcon />} />
                <Tab icon={<SmartphoneIcon />} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Image src={lap3} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Image src={desk3} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Image src={tab3} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Image src={mobile3} />
              </TabPanel>
            </Box>
            <Box sx={{ width: { lg: "40%" } }}>
              <CardContent sx={{ fontWeight: "bold", fontSize: "18px" }}>
                TVMaze <Chip label="May 2022" color="success" />
              </CardContent>
              <CardContent>
                Embark on a captivating journey through the world of television
                with TVMaxe - the premier blogging platform for TV enthusiasts.
                Discover insightful articles, engaging reviews, and
                thought-provoking discussions about your favorite shows and
                movies. Immerse yourself in a treasure trove of television
                knowledge and fuel your passion for the small screen with
                TVMaxe.
              </CardContent>
              <Button
                onClick={() => {
                  setSite("https://vmaze.netlify.app/");
                  setOpenDialog(true);
                }}
              >
                <CardContent
                  variant="contained"
                  sx={{
                    backgroundColor: "purple",
                    color: "white",
                    borderRadius: "30px",
                    p: "12px 30px",
                  }}
                >
                  Preview
                </CardContent>
              </Button>{" "}
              <Button
                variant="outlined"
                color="secondary"
                sx={{ borderRadius: "30px", fontSize: "14px", p: "12px 30px" }}
              >
                Visit Site
              </Button>
            </Box>
          </Stack>
          <Divider />
          <Stack direction={{ xs: "column", lg: "row" }}>
            <Box sx={{ width: { lg: "40%" } }}>
              {" "}
              <Tabs
                textColor="secondary"
                indicatorColor="secondary"
                centered
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab icon={<LaptopMacIcon />} />
                <Tab icon={<PersonalVideoIcon />} />
                <Tab icon={<TabletMacIcon />} />
                <Tab icon={<SmartphoneIcon />} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Image src={lap4} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Image src={desk4} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Image src={tab4} />
              </TabPanel>
            </Box>
            <Box sx={{ width: { lg: "40%" } }}>
              <CardContent sx={{ fontWeight: "bold", fontSize: "18px" }}>
                To-Do-List <Chip label="Mar 2022" color="success" />
              </CardContent>
              <CardContent>
                Stay organized and accomplish more with EasyTasks - the
                essential to-do list platform with basic features. Effortlessly
                manage your tasks, set reminders, and track your progress.
                Simplify your life and boost your productivity with EasyTasks,
                your trusted companion for staying on top of your daily
                responsibilities.
              </CardContent>
              <Button
                onClick={() => {
                  setSite("https://my-todo-39725.web.app/");
                  setOpenDialog(true);
                }}
              >
                <CardContent
                  variant="contained"
                  sx={{
                    backgroundColor: "purple",
                    color: "white",
                    borderRadius: "30px",
                    p: "12px 30px",
                  }}
                >
                  Preview
                </CardContent>
              </Button>{" "}
              <Button
                variant="outlined"
                color="secondary"
                sx={{ borderRadius: "30px", fontSize: "14px", p: "12px 30px" }}
              >
                Visit Site
              </Button>
            </Box>
          </Stack>
          <Divider />
        </Stack>
      </CardContent>
      {openDialog ? (
        <Box
          sx={{
            // height:"600px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            boxShadow:
              "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
          }}
        >
          <Button
            onClick={() => {
              setTimeout(() => {
                setOpenDialog(false);
              }, 200);
            }}
            sx={{ position: "absolute", right: 0, mr: 2, color: "white" }}
          >
            <CardContent
              sx={{ backgroundColor: "red", p: "5px 5px", borderRadius: "5px" }}
            >
              {" "}
              <CloseIcon />
            </CardContent>
          </Button>
          <Card>
            <iframe width={width} height={height} src={site}></iframe>
          </Card>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Project;
