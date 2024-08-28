import Notepad from "./applications/notepad/Notepad"
import Desktop from "./components/ui/desktop/Desktop"
import ShortcutGrid from "./components/ui/shortcut/ShortcutGrid"
import StartMenu from "./components/ui/taskbar/startmenu/Startmenu"
import Taskbar from "./components/ui/taskbar/Taskbar"

import { useState } from "react"

function App() {

  const [showStartMenu, setShowStartMenu] = useState(false)
  const [activeWindows, setActiveWindows] = useState([]);

  function addWindow(){
    const windows = activeWindows;
    windows.push(<Notepad/>);
    setActiveWindows(windows);
    setShowStartMenu(!showStartMenu);
   }

  return (
    <>
      <Desktop>
        {activeWindows.map((result, index) => result)}
        <StartMenu visibility={showStartMenu} clickedItem={()=>addWindow()}/>
        <ShortcutGrid />
        <Taskbar startButtonClick={ () => setShowStartMenu(!showStartMenu) } visibility={showStartMenu}/>
      </Desktop>
    </>
  )
}

export default App
