import { Box, Card, CardContent, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import section1 from "../Media/section1.webp";
import {Bruno_Ace} from "next/font/google"

const bruno=Bruno_Ace({subsets:['latin'],weight:'400'})

const SectionA = () => {
  return (
    
      <Stack
        direction={{ xs: "column", lg: "row" }}
        sx={{m:"200px 40px"}}
      >
        <Box sx={{ width: { xs: "80vw", lg: "40vw" } }}>
          <CardContent
            sx={{
              display: "inline-block",
              backgroundColor: "rgb(233 20 20 / 16%)",
              fontSize: "13px",
              borderRadius:"10px",
              color:"Red"
            }}
          >
            ✌🏻{"  "}Hi There I m Harsh
          </CardContent>

          <CardContent
          className={bruno.className}
            sx={{
              fontSize: { xs: "16px",sm:"28px",md:"30px",lg: "36px" },
              color:"white",
              p: "10px 0px",
              letterSpacing: ".02rem",
              lineHeight: {xs:"30px",sm:"40px",md:"60px",lg:"60px"},
              textTransform:"capitalize",
              textShadow:"3px 3px 0 #1f2127, -1px -1px 0 #1f2127, 1px -1px 0 #1f2127, -1px 1px 0 #1f2127, 1px 1px 0 #1f2127"
            }}
          >
            Creating Engaging Websites for a Digital World. Transforming Ideas
            into Beautiful Online Experiences.{" "}
          </CardContent>

          <CardContent sx={{ color: "white",fontSize:"15px" }}>
            Motivated fresher with a diverse portfolio of projects. Passionate
            about continuous learning and delivering high-quality solutions.
            Committed to effective collaboration and achieving success.
          </CardContent>
        </Box>
        <Box sx={{ width: { xs: "80vw", lg: "40vw" },display:"flex",justifyContent:"center" }}>
          <Image src={section1} />
        </Box>
      </Stack>
  );
};

export default SectionA;
