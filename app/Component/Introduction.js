import { Box, Button, CardContent, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import bg from "../Media/bg.png";
import Image from "next/image";

const Introduction = () => {
  
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          p:"400px 60px"
        }}
      >
        <Stack sx={{ justifyContent: "center" }}>
          <CardContent
            sx={{
              fontWeight: '1000',
              fontSize: { xs: "18px", sm: "35px", md: "50px" },
              letterSpacing: "3px",
              textAlign: "center",
              color: "#11111",
            }}
          >
            HEY, I'M HARSH CHOUDHARY
          </CardContent>
          <CardContent
            sx={{ lineHeight: "1.6", color: "#33333", textAlignLast: "center" }}
          >
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </CardContent>
          <CardContent sx={{display:"flex",justifyContent:"center"}}>
            <Button variant="outlined" color="secondary" sx={{color:"black",fontWeight:"bold",fontSize:"18px",p:"6px 40px",boxShadow:"0 0 3px 1px grey"}}>Projects</Button>
          </CardContent>
        </Stack>
      </Box>
    </Box>
  );
};

export default Introduction;