import React from 'react'
import "./Sidebar.css"
import {LineStyle, Timeline, TrendingUp} from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Dashboard</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle/>
                            Home
                        </li>
                        <li className="sidebarListItem active">
                            <Timeline/>
                            Analytics
                        </li>
                        <li className="sidebarListItem active">
                            <TrendingUp/>
                            Sales
                        </li>
                    </ul>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle/>
                            Home
                        </li>
                        <li className="sidebarListItem active">
                            <Timeline/>
                            Analytics
                        </li>
                        <li className="sidebarListItem active">
                            <TrendingUp/>
                            Sales
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
