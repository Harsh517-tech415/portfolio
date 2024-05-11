import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField
} from "@mui/material";
import { useRef } from "react";

const Contact = () => {
  //-------------------constants------------
  const form = useRef();
  //-------------------useEffects------------
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
  <div className="
  dark:bg-slate-600
  ">

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
      </div>
  );
};

export default Contact;
