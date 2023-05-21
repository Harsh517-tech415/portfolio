import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BsFiletypeCss } from "react-icons/bs";
import { TbBrandFirebase } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const SectionB = () => {
  return (
    <Box >
    <Stack>
        <CardContent sx={{display:"flex",justifyContent:"center"}} ><Typography sx={{p:"10px 25px",boxShadow:"0 0 11px 1px #FF000080",color:"white",textAlign:"center",fontSize:"40px",fontWeight:"900",border:"2px solid #FF000080",borderRadius:"10px"}}>TOOLING</Typography></CardContent>
        <Box sx={{display:"flex",justifyContent:"center"}}>
            <Card sx={{width:"600px",backgroundColor:"#8c0c0c"}}>
                <Stack direction="row"sx={{flexWrap:"wrap",justifyContent:"space-between",p:"10px 10px"}} rowGap={2}>
                  <Stack direction="row" sx={{border:"1px solid",borderRadius:"5px",color:"white"}}><CardContent><FaReact/></CardContent><CardContent  >React</CardContent></Stack>
                  <Stack direction="row" sx={{border:"1px solid",borderRadius:"5px",color:"white"}}><CardContent><TbBrandNextjs/></CardContent><CardContent  >NextJS</CardContent></Stack>
                  <Stack direction="row" sx={{border:"1px solid",borderRadius:"5px",color:"white"}}><CardContent><SiMui/></CardContent><CardContent  >Material UI</CardContent></Stack>
                  <Stack direction="row" sx={{border:"1px solid",borderRadius:"5px",color:"white"}}><CardContent><AiOutlineHtml5/></CardContent><CardContent  >HTML</CardContent></Stack>
                  <Stack direction="row" sx={{border:"1px solid",borderRadius:"5px",color:"white"}}><CardContent><BsFiletypeCss/></CardContent><CardContent  >CSS</CardContent></Stack>
                  <Stack direction="row" sx={{border:"1px solid",borderRadius:"5px",color:"white"}}><CardContent><TbBrandFirebase/></CardContent><CardContent  >Firebase</CardContent></Stack>
                  <Stack direction="row" sx={{border:"1px solid",borderRadius:"5px",color:"white"}}><CardContent><SiMysql/></CardContent><CardContent  >MySQL</CardContent></Stack>
                  <Stack direction="row" sx={{border:"1px solid",borderRadius:"5px",color:"white"}}><CardContent><SiCplusplus/></CardContent><CardContent  >C++</CardContent></Stack>
                  <Stack direction="row" sx={{border:"1px solid",borderRadius:"5px",color:"white"}}><CardContent><TbBrandJavascript/></CardContent><CardContent  >Javascript</CardContent></Stack>
                </Stack>
            </Card>
        </Box>
    </Stack>
    </Box>
  )
}

export default SectionB