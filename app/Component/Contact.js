import emailjs from "@emailjs/browser";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useRef, useState } from "react";

const Contact = () => {
  //-------------------constants------------
  const form = useRef();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  //-------------------useEffects------------
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("form.current",form.current);
    emailjs
      .sendForm(
        "service_vapyl3i",
        "template_qulfmuv",
        form.current,
        "CnzaNxrGbBMyvQqj4"
      )
      .then(
        (result) => {
          setOpenSnackBar(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="
  dark:bg-slate-600
  "
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
        <Card sx={{ width: { xs: "70%", md: "50%", lg: "35%" } }}>
          <form ref={form} onSubmit={sendEmail}>
            <Stack sx={{ p: "10px 20px" }}>
              <CardContent
                sx={{ fontWeight: "bold", color: "#666", textAlign: "left" }}
              >
                Name
              </CardContent>
              <TextField
              required
                placeholder="Enter Your Name"
                type="text"
                name="from_name"
                sx={{
                  color: "#333",
                  border: "1px solid #ebebeb",
                  background: "#f0f0f0",
                  fontWeight: "600",
                }}
              />
              <CardContent
                sx={{
                  fontWeight: "bold",
                  color: "#666",
                  textAlign: "left",
                  mt: "2%",
                }}
              >
                Email
              </CardContent>
              <TextField
              required
              name="messenger"
                placeholder="Enter Your Email"
                type="email"
                sx={{
                  color: "#333",
                  border: "1px solid #ebebeb",
                  background: "#f0f0f0",
                  fontWeight: "600",
                }}
              />
              <CardContent
                sx={{
                  fontWeight: "bold",
                  color: "#666",
                  textAlign: "left",
                  mt: "2%",
                }}
              >
                Mesaage
              </CardContent>
              <Card
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  aligncontent: "center",
                }}
              >
                <textarea
                required
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter Yoyr Message"
                  name="message"
                  style={{
                    resize: "none",
                    color: "#333",
                    border: "1px solid #ebebeb",
                    background: "#f0f0f0",
                    fontWeight: "600",
                  }}
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
      {openSnackBar && (
        <Snackbar open={open} autoHideDuration={6000} onClose={()=>setOpenSnackBar(false)}>
          <Alert
            onClose={()=>setOpenSnackBar(false)}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Thanks for contacting me.Will contact you soon.{" "}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default Contact;
