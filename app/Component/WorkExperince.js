import WorkIcon from "@mui/icons-material/Work";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Hidden,
  List,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { workExperince } from "../utils/constants";

const WorkExperince = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <CardContent id="work-experence">
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
      <Timeline position={"right"} className="p-0 space-y-2">
        {workExperince.map((singleCompany, index) => (
          <Box
            key={index}
            component={Stack}
            direction={"row"}
            className="w-fit"
          >
            {!matchDownSM && (
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                className="w-fit"
                align="right"
                variant="body2"
                color="text.secondary"
              >
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
              </TimelineOppositeContent>
            )}
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color={singleCompany.current ? "info" : "success"}>
                <WorkIcon sx={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} component={Card}>
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
              <div className="divide-y-2">
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
                          <Typography className="text-sm text-gray-500">
                            {singleProject.time_line.start_time} -{" "}
                            {singleProject.time_line.end_time}
                          </Typography>
                        }
                      />
                      <List>
                        {singleProject.description.map(
                          (singleDescription, singleDescriptionIndex) => (
                            <p
                              dangerouslySetInnerHTML={{
                                __html: singleDescription,
                              }}
                              key={singleDescriptionIndex}
                            ></p>
                          )
                        )}
                      </List>
                    </div>
                  )
              )}
                </div>
            </TimelineContent>
          </Box>
        ))}
        <Box
          component={matchDownSM ? Stack : TimelineItem}
          className={`flex ${matchDownSM ? "flex-row" : "flex-none"}`}
        >
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <WorkIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Journey Starts Here
            </Typography>
          </TimelineContent>
        </Box>
      </Timeline>
    </CardContent>
  );
};

export default WorkExperince;
