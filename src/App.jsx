import Notepad from "./applications/notepad/Notepad"
import Desktop from "./components/ui/desktop/Desktop"
import ShortcutGrid from "./components/ui/shortcut/ShortcutGrid"
import StartMenu from "./components/ui/taskbar/startmenu/Startmenu"
import Taskbar from "./components/ui/taskbar/Taskbar"

import { useState } from "react"

function App() {

  const [showStartMenu, setShowStartMenu] = useState(false)
  const [activeWindows, setActiveWindows] = useState([]);

  function addWindow(content){
    const windows = activeWindows;
    windows.push(content);
    setActiveWindows(windows);
    setShowStartMenu(!showStartMenu);
   }

  return (
    <>
      <Desktop>
        <div style={{
          width: "100%",
          height: "100%",
          position: "absolute"
        }}>
        {activeWindows.map((result, index) => result)}
        </div>
        <StartMenu visibility={showStartMenu} clickedItem={addWindow}/>
        <ShortcutGrid />
        <Taskbar startButtonClick={ () => setShowStartMenu(!showStartMenu) } visibility={showStartMenu}/>
      </Desktop>
    </>
  )
}

export default App
