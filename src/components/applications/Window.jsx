import Button from '../ui/buttons/Button';
import styles from './Window.module.css';
import Draggable from 'react-draggable'; // The default
import { Resizable } from 're-resizable';

import { useState } from 'react';

const Window = ({ children, title, onClose, icon, onActive, coordinates, defaultSize }) => {
    const [windowSize, setWindowSize] = useState({
        width: defaultSize.width,
        height: defaultSize.height,
    })

    const [visible, setVisible] = useState(true)

    return(
        <Draggable 
            handle=".handle"
            defaultPosition={{x: coordinates.x, y: coordinates.y}}
            > 
            <Resizable size={{ width: windowSize.width, height: windowSize.height }}
            onResizeStop={(e, direction, ref, d) => {
              setWindowSize({
                width: windowSize.width + d.width,
                height: windowSize.height + d.height,
              });
            }}
            style={visible ? {position: "absolute", zIndex: "100"} : {display: "none"}}
            >
            
                <div className={styles.window} style={{ width: windowSize.width, height: windowSize.height}} onClick={onActive}>
                    <div className={`${styles.title_bar} handle`}>
                        <img src={icon} className={styles.title_bar_icon}/>
                        <p className={styles.title}>{title}</p>
                        <div className={styles.controls}>
                            <Button onClick={() => setVisible(false)}>_</Button>
                            <Button>□</Button>
                            <Button onClick={onClose}>×</Button>
                        </div>
                    </div>
                    {children}
                </div>
            </Resizable>
        </Draggable>
    )
}

export default Window