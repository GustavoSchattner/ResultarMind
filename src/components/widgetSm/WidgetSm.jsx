import { Visibility } from '@material-ui/icons'
import React from 'react'
import "./WidgetSm.css"

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Novo Usuários Conectados</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="Imagem Usuário" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Gustavo Schattner</span>
                        <span className="widgetSmUserTitle">Web Dev</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="Imagem Usuário" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Gustavo Schattner</span>
                        <span className="widgetSmUserTitle">Web Dev</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="Imagem Usuário" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Gustavo Schattner</span>
                        <span className="widgetSmUserTitle">Web Dev</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="Imagem Usuário" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Gustavo Schattner</span>
                        <span className="widgetSmUserTitle">Web Dev</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="Imagem Usuário" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Gustavo Schattner</span>
                        <span className="widgetSmUserTitle">Web Dev</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
