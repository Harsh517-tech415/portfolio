"use client"
import { Stack } from "@mui/material"
import SectionA from "./Component/SectionA"
import SectionB from "./Component/SectionB"
import Navbar from "./Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-black">
      <div className="font-mono text-sm lg:flex">
      <Navbar />
      <Stack>
     <SectionA/>
      <SectionB/>
      </Stack>
      </div>
    </main>
  )
}





