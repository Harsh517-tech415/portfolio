"use client"
import { Box, Stack } from "@mui/material"
import Navbar from "./Navbar"
import Introduction from "./Component/Introduction"
import About from "./Component/About"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-white" >
      <div className="font-mono text-sm ">
      <Navbar />
        <Introduction/>
        <About/>
      
      </div>
    </main>
  )
}





