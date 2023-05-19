"use client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "/home/monster/Documents/Portfolio/portfolio/app/Navbar.js"
import Contact from "./contact/Contact"

export default function Home() {
  return (
    <BrowserRouter>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <Navbar />
        <Routes>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </main>
    </BrowserRouter>
  )
}





