import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {

    const [extended,setExtended] = useState(false)

    return (
        <>
            <div className="sidebar">
                <div className="top">
                    <img onClick = {() => {setExtended(a => !a)} } className='menu' src={assets.menu_icon} />
                    <div className="new-chat">
                        <img src={assets.plus_icon} />
                        {extended ? <p>New Chat</p> : ""}
                    </div>
                    {extended ? <div className="recent">
                                    <div className="recent-title">
                                        <div className="recent-entry">
                                            <img src={assets.message_icon} />
                                            <p>What is REACT ...</p>
                                        </div>
                                    </div>
                                </div> : ""}
                </div>
                <div className="bottom">
                    <div className="bottom-item recent-entry">
                        <img src={assets.question_icon} />  
                        {extended ? <p>HELP</p> : ""}
                    </div> 
                    <div className="bottom-item recent-entry">
                        <img src={assets.history_icon} />  
                        {extended ? <p>ACTIVITY</p> : ""}

                    </div>
                    <div className="bottom-item recent-entry">
                        <img src={assets.setting_icon} />  
                        {extended ? <p>SETTINGS</p> : ""}

                    </div>                   
                </div>
            </div>
        </>
    )
}

export default Sidebar
