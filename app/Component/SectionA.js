import { Box, Card, CardContent, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import section1 from "../Media/section1.webp";
const SectionA = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        sx={{ mt: { lg: "10%" }, justifyContent: "space-between" }}
      >
        <Box sx={{ width: { xs: "80vw", lg: "50vw" } }}>
          <CardContent
            sx={{
              display: "inline-block",
              backgroundColor: "#FF000080",
              fontSize: "16px",
            }}
          >
            ✌🏻{"  "}Hi There I'm Harsh
          </CardContent>

          <CardContent
            sx={{
              fontSize: "4vw",
              color: "white",
              p: "10px 0px",
              letterSpacing: "3px",
              lineHeight: "45px",
            }}
          >
            A Frontend Engineer. I Help Startups Launch And Grow Their Products
          </CardContent>

          <CardContent sx={{ color: "white" }}>
            i am a software engineer with more than four years of experience.
            recognized as a practical and effective developer, experienced in
            leading cross-functional teams in a time-pressured setting to
            complete projects on schedule and within budget.
          </CardContent>
        </Box>
        <Box sx={{ width: { xs: "80vw", lg: "30vw" } }}>
          <Image src={section1} />
        </Box>
      </Stack>
    </Box>
  );
};

export default SectionA;
