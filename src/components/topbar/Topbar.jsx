import React from 'react'
import "./Topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons'



export default function Topbar() {
    return (
        <div className = "Topbar">
            <div className="topbarWraper">
                <div className="topLeft">
                    <img src="LOGO final.png" alt="Logo" class="img"/>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        < NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        < Language />
                    </div>
                    <div className="topbarIconContainer">
                        < Settings />
                    </div>
                    <img src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/40068895_1584440101660436_6585558841985859584_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Yarkl0lvld4AX8WxjGX&_nc_ht=scontent-gru2-2.xx&oh=65bb770c95ea2ef3e0a9ac03988d3888&oe=61946E4F" alt="Imagem User" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

