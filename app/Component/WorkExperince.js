import WorkIcon from "@mui/icons-material/Work";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { workExperince } from "../utils/constants";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const WorkExperince = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div id="work-experence" className="text-black dark:bg-slate-600">
      <Typography className="text-center text-3xl font-bold uppercase">
        Work Experince
      </Typography>
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
      <Timeline position={"right"} className="space-y-2 p-0">
        {workExperince.map((singleCompany, index) => (
          <Grid key={index} container>
            {!matchDownSM && (
              <TimelineOppositeContent
                component={Grid}
                item
                sm={4}
                md={2}
                sx={{ m: "auto 0" }}
                className="dark:text-white"
                variant="body2"
                color="text.secondary"
              >
                {!singleCompany.last_element && (
                  <CardHeader
                    title={
                      <Typography className="dark:text-white text-lg font-bold">
                        {singleCompany.title}
                      </Typography>
                    }
                    subheader={
                      <div className="dark:text-white">
                        <Typography>{singleCompany.sub_header}</Typography>
                        <Typography>
                          {singleCompany.time_line.start_time} -{" "}
                          {singleCompany.time_line.end_time}
                        </Typography>
                      </div>
                    }
                  />
                )}
              </TimelineOppositeContent>
            )}
            <Grid item xs={4} sm={1} container>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                  color={
                    singleCompany.last_element
                      ? "secondary"
                      : singleCompany.current
                      ? "info"
                      : "success"
                  }
                >
                  <WorkIcon sx={{ color: "white" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
            </Grid>
            {singleCompany.last_element ? (
              <div className="text-2xl font-extrabold flex items-center dark:text-white">
                {singleCompany.last_element_message}
              </div>
            ) : (
              <Grid
                item
                xs={8}
                sm={6}
                md={9}
                component={Card}
                className="dark:bg-slate-700 dark:text-white w-full p-4"
              >
                <Hidden smUp>
                  <CardHeader
                    title={
                      <Typography className="text-lg font-bold">
                        {singleCompany.title}
                      </Typography>
                    }
                    subheader={
                      <div>
                        <Typography>{singleCompany.sub_header}</Typography>
                        <Typography>
                          {singleCompany.time_line.start_time} -{" "}
                          {singleCompany.time_line.end_time}
                        </Typography>
                      </div>
                    }
                  />
                </Hidden>

                <div className="space-y-4 divide-y-2">
                  {singleCompany.project_description.map(
                    (singleProject, projectIndex) => (
                      <div key={projectIndex}>
                        <CardHeader
                          title={
                            <Typography className="text-lg font-bold">
                              {singleProject.title}
                            </Typography>
                          }
                          subheader={
                            <Typography className="text-sm text-gray-500 dark:text-gray-200">
                              {singleProject.time_line.start_time} -{" "}
                              {singleProject.time_line.end_time}
                            </Typography>
                          }
                        />
                        <List>
                          {singleProject.description.map(
                            (singleDescription, singleDescriptionIndex) => (
                              <ListItem key={singleDescriptionIndex}>
                                <ListItemIcon>
                                  <FiberManualRecordIcon className="text-gray-500 dark:text-gray-300"/>
                                </ListItemIcon>
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: singleDescription,
                                  }}
                                ></p>
                              </ListItem>
                            )
                          )}
                        </List>
                      </div>
                    )
                  )}
                </div>
              </Grid>
            )}
          </Grid>
        ))}
      </Timeline>
    </div>
  );
};

export default WorkExperince;
