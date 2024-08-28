import Notepad from "./applications/notepad/Notepad"
import Desktop from "./components/ui/desktop/Desktop"
import ShortcutGrid from "./components/ui/shortcut/ShortcutGrid"
import StartMenu from "./components/ui/taskbar/startmenu/Startmenu"
import Taskbar from "./components/ui/taskbar/Taskbar"

import { useState } from "react"

function App() {

  const [showStartMenu, setShowStartMenu] = useState(false)

  return (
    <>
      <Desktop>
        <Notepad />
        <StartMenu visibility={showStartMenu}/>
        <ShortcutGrid />
        <Taskbar startButtonClick={ () => setShowStartMenu(!showStartMenu) } visibility={showStartMenu}/>
      </Desktop>
    </>
  )
}

export default App
