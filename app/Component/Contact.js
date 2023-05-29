import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import bg from "../Media/bg.png";
import { ColorModeContext } from "../page";
import { Textarea } from "@mui/joy";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [url, setUrl] = useState(`url(${bg.src})`);
  const { mode } = useContext(ColorModeContext);
  const name = useRef("");
  const email = useRef("");
  const message = useRef("");
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);

  const handleTextareaFocus = () => {
    setIsTextareaFocused(true);
  };

  const handleTextareaBlur = () => {
    setIsTextareaFocused(false);
  };

  useEffect(() => {
    mode === "light" ? setUrl(`url(${bg.src})`) : setUrl("");
  }, [mode]);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3j7y9bb",
        "template_ehib2ny",
        form.current,
        "kE9Nc48ftp9tczFp6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box
      sx={{
        backgroundImage: url,
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Box sx={{ pt: "100px" }}>
        <CardContent
          sx={{
            textAlign: "center",
            letterSpacing: "2px",
            fontWeight: "bold",
            fontSize: "38px",
          }}
        >
          CONTACT
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
      </Box>
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ width: {xs:"70%",md:"50%",lg:"35%"} }}>
            <form ref={form} onSubmit={sendEmail}>
          <Stack sx={{ p: "10px 20px" }}>
              <CardContent sx={{fontWeight:"bold",color:"#666",textAlign:"left"}}>Name</CardContent>
              <TextField
                placeholder="Enter Your Name"
                type="text"
                name="user_name"
                 sx={{color:"#333",border:"1px solid #ebebeb",background:"#f0f0f0",fontWeight:"600"}}
              />
              <CardContent sx={{fontWeight:"bold",color:"#666",textAlign:"left",mt:"2%"}}>Email</CardContent>
              <TextField
                placeholder="Enter Your Email"
                type="email"
                name="user_email"
                sx={{color:"#333",border:"1px solid #ebebeb",background:"#f0f0f0",fontWeight:"600"}}

              />
              <CardContent sx={{fontWeight:"bold",color:"#666",textAlign:"left",mt:"2%"}}>Mesaage</CardContent>
              <Card
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  aligncontent: "center",
                }}
                >
                {/* <TextareaAutosize
                /> */}
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                 placeholder="Enter Yoyr Message"
                 name="message"
                 style={{resize:"none",color:"#333",border:"1px solid #ebebeb",background:"#f0f0f0",fontWeight:"600"}}
                 ></textarea>

              </Card>
              <CardContent sx={{ justifyContent: "center" }}>
                <Button
                  type="submit"
                  sx={{ backgroundColor: "purple" }}
                  value="Send"
                  >
                  <CardContent
                    variant="contained"
                    sx={{
                      backgroundColor: "purple",
                      color: "black",
                      borderRadius: "5px",
                      p: "12px 30px",
                      fontWeight: "bold",
                    }}
                  >
                    SUBMIT
                  </CardContent>
                </Button>
              </CardContent>
          </Stack>
            </form>
        </Card>
      </CardContent>
    </Box>
  );
};

export default Contact;
