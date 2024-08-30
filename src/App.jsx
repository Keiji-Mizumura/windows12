import React, { useState, useCallback } from "react"
import Desktop from "./components/ui/desktop/Desktop"
import ShortcutGrid from "./components/ui/shortcut/ShortcutGrid"
import StartMenu from "./components/ui/taskbar/startmenu/StartMenu"
import Taskbar from "./components/ui/taskbar/taskbar-menu/Taskbar"

// Simple unique key generator function
const generateUniqueKey = () => {
  return `window-${Date.now()}-${Math.random()}`;
}

const App = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [activeWindows, setActiveWindows] = useState([]);
  const [windowCoordinates, setWindowCoordinates] = useState({x: 200, y: 50});

  const onClose = useCallback(
    (key) => {
      setActiveWindows((prevWindows) =>
        prevWindows.filter((result) => result.key !== key)
      );
    },
    [setActiveWindows]
  )

  const setCurrentWindow = (key) => {

    setActiveWindows((prevWindows) =>
      prevWindows.map((window) =>
        window.key === key
          ? { ...window, active: true }
          : { ...window, active: false }
      )
    );
  }  

  const addWindow = (content, data) => {
    setWindowCoordinates({
      x: windowCoordinates.x + 10,
      y: windowCoordinates.y + 10
    });
    
    const uniqueKey = generateUniqueKey(); // Generate a unique ID
    const newWindow = {
      title: data.title,
      icon: data.icon,
      active: true, // Set the newly added window as active
      element: React.cloneElement(content, {
        key: uniqueKey,
        onClose: () => onClose(uniqueKey),
        onActive: () => setCurrentWindow(uniqueKey),
        visible: true,
        coordinates: windowCoordinates
      }),
      key: uniqueKey,
      visible: true
    };
  
    // Deactivate all other windows and add the new one as active
    setActiveWindows((prevWindows) =>
      [...prevWindows.map((win) => ({ ...win, active: false })), newWindow]
    );
  
    setShowStartMenu(false);
  }
  

  return (
    <>
      <Desktop>
      {activeWindows
        .slice() // Create a shallow copy of the array
        .sort((a, b) => a.active === b.active ? 0 : a.active ? 1 : -1) // Sort to place the active window at the end
        .map((result) => result.element)}
        {/* <Welcome coordinates={{x:50, y:50}}/> */}
        <StartMenu visibility={showStartMenu} clickedItem={addWindow} />
        <ShortcutGrid clickedItem={addWindow}/>
        <Taskbar
          startButtonClick={() => setShowStartMenu(!showStartMenu)}
          visibility={showStartMenu}
          activeWindows={activeWindows}
          taskbarClick={setCurrentWindow}
        />
      </Desktop>
    </>
  )
}

export default App
