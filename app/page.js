"use client"
import About from '@/app/Component/About';
import Contact from '@/app/Component/Contact';
import Introduction from '@/app/Component/Introduction';
import Project from '@/app/Component/Project';
import Navbar from '@/app/Navbar';
import makeStore from '@/lib/store/store';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';

const Home=()=> {
  return (
    <main className="flex min-h-screen flex-col">
      <CssBaseline />
        <div className="font-mono text-sm dark:text-white dark:bg-slate-800">
          <Navbar />
          <Introduction />
          <About />
          <Project />
          <Contact />
        </div>
      </main>
  );
}

export default function App() {
const store = makeStore();

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
