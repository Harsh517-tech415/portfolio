import { SpaceBar } from "@mui/icons-material";
import { Box, Button, CardContent, Container, Stack, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container sx={{ pt: "113px", pb: "113px" }}>
      <Box sx={{mb:"90px"}}>
      <CardContent sx={{ textAlign: "center", pb: "0px" }}>
        <Typography
          sx={{ fontWeight: "700", letterSpacing: "2px", fontSize: "35px" }}
        >
          ABOUT ME
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: "13px",
          pb: "1px",
        }}
      >
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
          textAlignLast: "center",
          color: "grey",
          fontSize: "16px",
          lineHeight: 1.7,
          letterSpacing: "1px",
          m:"auto"
        }}
      >
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </CardContent>
      </Box>
      <Stack direction={{xs:"column",md:"row"}} sx={{justifyContent:{xs:"center",md:"space-between"}}} gap={{xs:4,sm:4}}>
        <Box sx={{ width: {md:"40%"},display:"flex",justifyContent:"center"}}>
            <Stack gap={2}>
          <CardContent sx={{ fontWeight: "bold",textAlign:"left",fontSize:"26px",pl:"0px"}}>Get to know me!</CardContent>
          <Typography sx={{ textAlignLast: "left",fontSize:"17px",color:"#666666" }}>
            I am a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </Typography>
          <Typography sx={{ textAlignLast: "left",fontSize:"17px",color:"#666666" }}>
            I also like sharing content related to the stuff that I have
            learned over the years in Web Development so it can help other
            people of the Dev Community. 
          </Typography>
          <Typography sx={{ textAlignLast: "left",fontSize:"17px",color:"#666666" }}>
            Feel free to Connect or Follow me on my
            Linkedin where I post useful content related to Web Development and
            Programming I am open to Job opportunities where I can contribute,
            learn and grow. If you have a good opportunity that matches my
            skills and experience then do not hesitate to contact me.
          </Typography>
          </Stack>
        </Box>
        <Box sx={{ width: {md:"40%"}}}>
            <CardContent sx={{fontWeight:"bold",fontSize:"26px",pb:"30px"}}>MY SKILLS</CardContent>
            <Box sx={{display:"flex",flexWrap:"wrap"}} gap={3}>
                <CardContent sx={{backgroundColor:"rgba(153, 153, 153, 0.2)",color:"#666666",borderRadius:"5px"}}>ReactJs</CardContent>
                <CardContent sx={{backgroundColor:"rgba(153, 153, 153, 0.2)",color:"#666666",borderRadius:"5px"}}>NextJs</CardContent>
                <CardContent sx={{backgroundColor:"rgba(153, 153, 153, 0.2)",color:"#666666",borderRadius:"5px"}}>Gitub</CardContent>
                <CardContent sx={{backgroundColor:"rgba(153, 153, 153, 0.2)",color:"#666666",borderRadius:"5px"}}>SAAS</CardContent>
                <CardContent sx={{backgroundColor:"rgba(153, 153, 153, 0.2)",color:"#666666",borderRadius:"5px"}}>ExpressJs</CardContent>
                <CardContent sx={{backgroundColor:"rgba(153, 153, 153, 0.2)",color:"#666666",borderRadius:"5px"}}>C++</CardContent>
                <CardContent sx={{backgroundColor:"rgba(153, 153, 153, 0.2)",color:"#666666",borderRadius:"5px"}}>Netlify</CardContent>
                <CardContent sx={{backgroundColor:"rgba(153, 153, 153, 0.2)",color:"#666666",borderRadius:"5px",p:"auto"}}>CSS</CardContent>
                <CardContent sx={{backgroundColor:"rgba(153, 153, 153, 0.2)",color:"#666666",borderRadius:"5px"}}>Firebase</CardContent>
                <CardContent sx={{backgroundColor:"rgba(153, 153, 153, 0.2)",color:"#666666",borderRadius:"5px"}}>Javascript</CardContent>
                <CardContent sx={{backgroundColor:"rgba(153, 153, 153, 0.2)",color:"#666666",borderRadius:"5px"}}>Responsive</CardContent>
                <CardContent sx={{backgroundColor:"rgba(153, 153, 153, 0.2)",color:"#666666",borderRadius:"5px",p:"auto"}}>HTML</CardContent>
                <CardContent sx={{backgroundColor:"rgba(153, 153, 153, 0.2)",color:"#666666",borderRadius:"5px"}}>Material UI</CardContent>
                <CardContent sx={{backgroundColor:"rgba(153, 153, 153, 0.2)",color:"#666666",borderRadius:"5px"}}>MySQL</CardContent>

            </Box>
        </Box>
      </Stack>
        <CardContent sx={{pl:"0px"}}>
          <Button variant="outlined" color="secondary" sx={{color:"black",fontWeight:"bold",fontSize:"18px",p:"6px 40px",boxShadow:"0 0 3px 1px grey",mt:"15px"}}>Contact</Button>
        </CardContent>
    </Container>
  );
};

export default About;
