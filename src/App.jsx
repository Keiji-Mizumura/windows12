import React, { useState, useCallback, act } from "react";
import Desktop from "./components/ui/desktop/Desktop";
import ShortcutGrid from "./components/ui/shortcut/ShortcutGrid";
import StartMenu from "./components/ui/taskbar/startmenu/Startmenu";
import Taskbar from "./components/ui/taskbar/Taskbar";

// Simple unique key generator function
function generateUniqueKey() {
  return `window-${Date.now()}-${Math.random()}`;
}

function App() {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [activeWindows, setActiveWindows] = useState([]);

  const onClose = useCallback(
    (key) => {
      setActiveWindows((prevWindows) =>
        prevWindows.filter((result) => result.key !== key)
      );
    },
    [setActiveWindows]
  )

  function setCurrentWindow(key) {
    setActiveWindows((prevWindows) =>
      prevWindows.map((window) =>
        window.key === key
          ? { ...window, active: true }
          : { ...window, active: false }
      )
    );
  }

  function addWindow(content, data) {
    const uniqueKey = generateUniqueKey(); // Generate a unique ID
    const newWindow = {
      title: data.title,
      icon: data.icon,
      active: true, // Set the newly added window as active
      element: React.cloneElement(content, {
        key: uniqueKey,
        onClose: () => onClose(uniqueKey),
        onActive: () => setCurrentWindow(uniqueKey),
        active: true
      }),
      key: uniqueKey,
    };
  
    // Deactivate all other windows and add the new one as active
    setActiveWindows((prevWindows) =>
      [...prevWindows.map((win) => ({ ...win, active: false })), newWindow]
    );
  
    setShowStartMenu(!showStartMenu);
  }

  return (
    <>
      <Desktop>
      {activeWindows
        .slice() // Create a shallow copy of the array
        .sort((a, b) => a.active === b.active ? 0 : a.active ? 1 : -1) // Sort to place the active window at the end
        .map((result) => result.element)}
        <StartMenu visibility={showStartMenu} clickedItem={addWindow} />
        <ShortcutGrid />
        <Taskbar
          startButtonClick={() => setShowStartMenu(!showStartMenu)}
          visibility={showStartMenu}
          activeWindows={activeWindows}
        />
      </Desktop>
    </>
  );
}

export default App;
