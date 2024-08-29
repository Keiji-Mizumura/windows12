import Button from '../components/ui/buttons/Button';
import styles from './Window.module.css';
import Draggable from 'react-draggable'; // The default
import { Resizable } from 're-resizable';

import { useState } from 'react';

function Window({ children, title, onClose }){
    const [windowSize, setWindowSize] = useState({
        width: 400,
        height: 400
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
            
                <div className={styles.window} style={{ width: windowSize.width, height: windowSize.height}}>
                    <div className={`${styles.title_bar} handle`}>
                        <p className={styles.title}>{title}</p>
                        <div className={styles.controls}>
                            <Button>_</Button>
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