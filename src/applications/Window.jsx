import Button from '../components/ui/buttons/Button';
import styles from './Window.module.css';
import Draggable from 'react-draggable'; // The default
import { Resizable } from 're-resizable';

import { useState } from 'react';

function Window({ children, title, onClose, icon, onActive, active }){
    const [windowSize, setWindowSize] = useState({
        width: 400,
        height: 400,
        zIndex: 100
    })

    return(
        <Draggable 
            handle=".handle"
            defaultPosition={{x: 50, y: 50}}
            > 
            <Resizable size={{ width: windowSize.width, height: windowSize.height }}
            onResizeStop={(e, direction, ref, d) => {
              setWindowSize({
                width: windowSize.width + d.width,
                height: windowSize.height + d.height,
              });
            }}
            style={{position: "absolute"}}
            >
            
                <div className={styles.window} style={{ width: windowSize.width, height: windowSize.height}} onClick={onActive}>
                    <div className={`${styles.title_bar} handle`}>
                        <img src={icon} className={styles.title_bar_icon}/>
                        <p className={styles.title}>{title}</p>
                        <div className={styles.controls}>
                            <Button>_</Button>
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