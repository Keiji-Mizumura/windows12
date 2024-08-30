import styles from './Discord.module.css'

import discord from '../../../assets/icons/discord.png'

import Window from "../Window";
import MenuBar from '../MenuBar';

const Discord = ({ onClose, onActive, coordinates, visible, title, content }) =>{
    if(visible){    
        return(
            <Window 
                title="Discord"
                onClose={onClose} 
                icon={discord} 
                onActive={onActive} 
                coordinates={coordinates}
                defaultSize={{width: 600, height: 500}}
                >
                
                <div className={styles.discord_container}>
                    <div className={styles.discord_servers}>
                        <div className={styles.server_item}>
                            Direct Messages
                        </div>
                        <div className={styles.server_item}>
                            <div className={styles.notification}>10</div>
                            osu!
                        </div>
                        <div className={styles.server_item}>
                            Windows12 Dev
                        </div>
                        <div className={styles.server_item}>
                            Minecraft
                        </div>
                        <div className={styles.server_item}>
                            Javascript
                        </div>
                        <div className={styles.server_item}>
                            +
                        </div>
                    </div>
                    <div className={styles.selected_server}>
                        <div className={styles.messages}>
                            <div className={styles.message_item}>
                                <h2 className={styles.message_user}>Bill Gates</h2>
                                <p className={styles.message_content}>Hello there!</p>
                            </div>
                        </div>
                        <div className={styles.messages}>
                            <div className={styles.message_item}>
                                <h2 className={styles.message_user}>Bill Gates</h2>
                                <p className={styles.message_content}>Hello there!</p>
                            </div>
                        </div>
                        <div className={styles.messages}>
                            <div className={styles.message_item}>
                                <h2 className={styles.message_user}>Bill Gates</h2>
                                <p className={styles.message_content}>Hello there!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Window>
        )
    }
    else{
        return <></>
    }
}

export default Discord