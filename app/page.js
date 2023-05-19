"use client"
import Navbar from "/home/monster/Documents/Portfolio/portfolio/app/Navbar.js"
import SectionA from "./Component/SectionA"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  pt-64 bg-black">
      <div className="z-10  items-center font-mono text-sm lg:flex">
      <Navbar />
      <SectionA/>
      </div>
    </main>
  )
}





