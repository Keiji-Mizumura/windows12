import React, { useState, useCallback, useEffect, useRef } from "react"
import Desktop from "./components/ui/desktop/Desktop"
import ShortcutGrid from "./components/ui/shortcut/ShortcutGrid"
import StartMenu from "./components/ui/taskbar/startmenu/StartMenu"
import Taskbar from "./components/ui/taskbar/taskbar-menu/Taskbar"

import Welcome from "./components/applications/welcome/Welcome"

// Simple unique key generator function
const generateUniqueKey = () => {
  return `window-${Date.now()}-${Math.random()}`;
}

const App = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [activeWindows, setActiveWindows] = useState([]);
  const [windowCoordinates, setWindowCoordinates] = useState({x: 200, y: 50});
  
  // Ref to track if the Welcome window has been added
  const welcomeAddedRef = useRef(false);

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
    // Restrict duplication only for the "Welcome" window
    if (data.title === "Welcome") {
      const windowExists = activeWindows.some(window => window.title === "Welcome");
      
      if (windowExists) {
        return; // If the "Welcome" window exists, exit the function early
      }
    }
  
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
  
  

  useEffect(() => {
    // Check if the Welcome window has been added
    if (!welcomeAddedRef.current) {
      addWindow(<Welcome coordinates={{x: 50, y: 50}} />, {title: "Welcome", icon: ""});
      welcomeAddedRef.current = true; // Mark the Welcome window as added
    }
  }, []); // No dependencies, so it only runs once when the component mounts
  

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

export default App;
