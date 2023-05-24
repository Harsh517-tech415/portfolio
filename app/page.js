"use client"
import { Box, Stack } from "@mui/material"
import Navbar from "./Navbar"
import Introduction from "./Component/Introduction"
import About from "./Component/About"
import Project from "./Component/Project"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col" >
      <div className="font-mono text-sm ">
      <Navbar />
        <Introduction/>
        <About/>
        <Project/>
      
      </div>
    </main>
  )
}





