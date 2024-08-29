import React, { useState, useCallback } from "react";
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
  );

  function addWindow(content) {
    const uniqueKey = generateUniqueKey(); // Generate a unique ID
    const newWindow = {
      element: React.cloneElement(content, {
        key: uniqueKey,
        onClose: () => onClose(uniqueKey),
      }),
      key: uniqueKey,
    };
    setActiveWindows((prevWindows) => [...prevWindows, newWindow]);
    setShowStartMenu(!showStartMenu);
  }

  return (
    <>
      <Desktop>
        {activeWindows.map((result) => result.element)}
        <StartMenu visibility={showStartMenu} clickedItem={addWindow} />
        <ShortcutGrid />
        <Taskbar
          startButtonClick={() => setShowStartMenu(!showStartMenu)}
          visibility={showStartMenu}
        />
      </Desktop>
    </>
  );
}

export default App;
