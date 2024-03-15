import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
    return (
        <>
            <div className="main">
                <div className="nav">
                    <p>Gemini</p>
                    <img src= {assets.user_icon} />
                </div>
                <div className="main-container">
                    <div className="greet">
                        <p><span>Hello , Dev.</span></p>
                        <p>How can I help you today ?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest beautiful places to see an upcomming road trip</p>
                            <img src= {assets.compass_icon} />
                        </div>
                        <div className="card">
                            <p>Briefly summarize this concept: urban planning</p>
                            <img src= {assets.bulb_icon} />
                        </div>
                        <div className="card">
                            <p>Brainstorm team bonding activities for our work retreat</p>
                            <img src= {assets.message_icon} />
                        </div>
                        <div className="card">
                            <p>Tell me about React JS and React Native</p>
                            <img src= {assets.code_icon} />
                        </div>
                    </div>
                    <div className="main-bottom">
                        <div className="search-box">
                            <input type="text" placeholder='Enter a prompt here' />
                            <div>
                                <img src= {assets.gallery_icon} />
                                <img src= {assets.mic_icon} />
                                <img src= {assets.send_icon} />
                            </div>
                        </div> 
                        <p className="bottom-info">Gemini may include some offensive content so please double check its response.</p>   
                    </div>    
                </div>
            </div>
        </>
    )
}

export default Main
