import './index.css';
import Navbar from './components/Navbar' 
import Welcome from './components/Welcome';
import Dock from './components/Dock';
import Home from './components/Home';
import Settings from './components/Settings';

import Terminal from "./windows/Terminal";
import Resume from "./windows/Resume";
import Finder from "./windows/Finder";
import Text from "./windows/Text";
import Image from "./windows/Image";
import Contact from "./windows/Contact";
import Photos from "./windows/Photos";
import useThemeStore from "./store/theme";

import gsap from 'gsap';
import {Draggable} from 'gsap/Draggable';
import { useEffect } from "react";

gsap.registerPlugin(Draggable)

function App() {  
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <main >
        <Navbar/>
        <div id="desktop" className="flex-1 w-full">
          <Welcome/>

          <Terminal/>
          <Resume/>
          <Finder/>
          <Text/>
          <Image/>
          <Contact/>
          <Home/>
          <Photos/>
          <Settings/>
        </div>
        <Dock/>
    </main>
  )
}

export default App
