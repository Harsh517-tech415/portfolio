"use client";
import About from "@/app/Component/About";
import Contact from "@/app/Component/Contact";
import Introduction from "@/app/Component/Introduction";
import Project from "@/app/Component/Project";
import Navbar from "@/app/Navbar";
import makeStore from "@/lib/store/store";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import WorkExperince from "./Component/WorkExperince";
import { Divider } from "@mui/material";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <CssBaseline />
      <div className="font-mono text-sm dark:text-white dark:bg-slate-800 space-y-12">
        <Navbar />
        <div className="w-full h-1 bg-gray-50 mx-2"/>
        <Introduction />
        <div className="w-full h-1 bg-gray-100 mx-2"/>
        <About />
        <div className="w-full h-1 bg-gray-100 mx-2"/>
        <WorkExperince />
        <div className="w-full h-1 bg-gray-100 mx-2"/>
        <Project />
        <div className="w-full h-1 bg-gray-100 mx-2"/>
        <Contact />
      </div>
    </main>
  );
};

export default function App() {
  const store = makeStore();

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
