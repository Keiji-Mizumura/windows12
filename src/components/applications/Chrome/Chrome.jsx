import styles from './Chrome.module.css'

import Window from "../Window"
import MenuBar from '../MenuBar';

import ChromeIcon from "../../../assets/icons/chrome-logo.svg"

import { useState } from 'react';
import Button from '../../ui/buttons/Button';

function Chrome({ onClose, onActive, coordinates}){

    const [currentURL, setCurrentURL] = useState('http://web.archive.org/web/20020830214217/http://www.google.com/');
    const [currentInput, setCurrentInput] = useState('http://web.archive.org/web/20020830214217/http://www.google.com/');

    function loadPage(e){
        e.preventDefault();
        setCurrentURL(currentInput);
    }

    function handleChange(e){
        setCurrentInput(e.target.value)
    }

    return(
        <>
            <Window 
                title="Google Chrome"
                onClose={onClose} icon={ChromeIcon}
                onActive={onActive}
                coordinates={coordinates}
                defaultSize={{
                    width: 600,
                    height: 400
                }}
                >
                <MenuBar />
                <div className={styles.url_bar}>
                    <Button>⇦</Button>
                    <Button>⇨</Button>
                    <Button>Refresh</Button>
                    <form onSubmit={loadPage}>
                        <input type="text" placeholder='url' value={currentInput} onChange={handleChange}/>
                        <Button>Enter</Button>
                    </form>
                    <Button>Dowloads</Button>
                </div>
                <iframe className={styles.browser} src={currentURL} title="description"></iframe>
            </Window>
        </>
    )
}

export default Chrome