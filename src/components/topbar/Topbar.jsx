import React from 'react'
import "./Topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons'



export default function Topbar() {
    return (
        <div className = "Topbar">
            <div className="topbarWraper">
                <div className="topLeft">
                    <img src="https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/c0.156.526.274a/p526x296/109715289_102708594859851_4500748062660218365_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=N7l-XqUsskwAX_C3WXs&_nc_ht=scontent-gru1-2.xx&oh=661069601d9fb4b10550991a29996100&oe=6197B2BC" alt="Logo ResultarMind" />
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
                    <img src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/40068895_1584440101660436_6585558841985859584_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Yarkl0lvld4AX8WxjGX&_nc_ht=scontent-gru2-2.xx&oh=65bb770c95ea2ef3e0a9ac03988d3888&oe=61946E4F" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

