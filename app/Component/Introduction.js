import { useAppSelector } from "@/lib/store/hook";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Button, CardContent, Stack } from "@mui/material";
import Link from "next/link";
import bg from "../Media/bg.png";
const Introduction = () => {
//-------------------constants-------------
// const [url,setUrl]=useState(``)
const mode=useAppSelector((state)=>state.themeOptions.mode)
//-------------------useEffect-------------
  // useEffect(()=>{
  //   console.log("introduction mode",mode);
  //   mode==="light"?setUrl(`url(${bg.src})`):setUrl("")
  // }
  // ,[mode])
  return (
    <Box
      sx={{
        backgroundImage: `url(${mode==='light'?bg.src:""})`,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
      className={`${mode==='dark'&&'bg-gradient-to-l from-gray-700 to-gray-600'}`}
    >
      <Box
        sx={{
          p:{xs:"200px 10px",sm:"270px 20px 260px 20px",md:"350px 40px 380px 40px",lg:"370px 60px"}
        }}
      >
        <Stack sx={{ justifyContent: "center" }}>
          <CardContent
            sx={{
              fontWeight: '1000',
              fontSize: { xs: "32px", sm: "35px", md: "50px" },
              letterSpacing: "3px",
              textAlign: "center",
              color: "#11111",
              lineHeight:1
            }}
          >
            HEY, I AM HARSH CHOUDHARY
          </CardContent>
          <CardContent
            sx={{ lineHeight: "1.6", color: "#33333",textAlign:"center" ,textAlignLast: "center",p:{xs:"20px 10px",lg:"16px 500px"} }}
          >
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </CardContent>
          <CardContent sx={{display:"flex",justifyContent:"center"}}>
            <Button variant="outlined" color="secondary" sx={{color:"black",fontWeight:"bold",fontSize:"18px",p:"6px 40px",boxShadow:"0 0 3px 1px grey"}}
            onClick={() => {
              window.scroll({ top: 1900, behavior: "smooth" });
            }}>Projects</Button>
          </CardContent>
          <CardContent sx={{display:"flex",justifyContent:"center"}}>
            <Stack direction="row" gap={4}>
              <Link href="https://www.linkedin.com/in/harsh-choudhary-09184817a/"><LinkedInIcon sx={{color:"white",fontSize:"50px",backgroundColor:"grey",borderRadius:"20px",p:"5px 5px"}}/></Link>
              <Link href="https://github.com/Harsh517-tech415"><GitHubIcon sx={{color:"white",fontSize:"50px",backgroundColor:"grey",borderRadius:"20px",p:"5px 5px"}}/></Link>
              {/* <a href="mailto:harshconsult3@gmail.com"><EmailIcon sx={{color:"white",fontSize:"50px",backgroundColor:"grey",borderRadius:"20px",p:"5px 5px"}}/></a> */}
            </Stack>
          </CardContent>
        </Stack>
      </Box>
    </Box>
  );
};

export default Introduction;
