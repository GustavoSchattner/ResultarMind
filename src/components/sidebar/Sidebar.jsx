<<<<<<< HEAD
import React from 'react'
import "./Sidebar.css"
import {LineStyle, Timeline, Work, TrendingUp, Person, Store, Report, AttachMoney, BarChart, Email, DynamicFeed, Message} from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Painel de Controle</div>
                        <ul className="sidebarList">
                            <li className="sidebarListItem ">
                                <LineStyle className="sidebarIcon"/>
                                Início
                            </li>
                            <li className="sidebarListItem ">
                                <Timeline className="sidebarIcon"/>
                                Dados da Empresa
                            </li>
                            <li className="sidebarListItem ">
                                <TrendingUp className="sidebarIcon"/>
                                Vendas
                            </li>
                        </ul>

                    <div className="sidebarTitle">Menu Rápido</div>
                        <ul className="sidebarList">
                            <li className="sidebarListItem ">
                                <Person className="sidebarIcon"/>
                                Usuários
                            </li>
                            <li className="sidebarListItem ">
                                <Store className="sidebarIcon"/>
                                Produtos
                            </li>
                            <li className="sidebarListItem ">
                                <AttachMoney className="sidebarIcon"/>
                                Transações
                            </li>
                            <li className="sidebarListItem ">
                                <BarChart className="sidebarIcon"/>
                                Avisos
                            </li>
                        </ul>

                    <div className="sidebarTitle">Notificações</div>
                        <ul className="sidebarList">
                            <li className="sidebarListItem ">
                                <Email className="sidebarIcon"/>
                                Email
                            </li>
                            <li className="sidebarListItem ">
                                <DynamicFeed className="sidebarIcon"/>
                                Feedback
                            </li>
                            <li className="sidebarListItem ">
                                <Message className="sidebarIcon"/>
                                Observações
                            </li>
                        </ul>

                    <div className="sidebarTitle">Administrador</div>
                        <ul className="sidebarList">
                            <li className="sidebarListItem ">
                                <Work className="sidebarIcon"/>
                                Gerenciamento
                            </li>
                            <li className="sidebarListItem ">
                                <Timeline className="sidebarIcon"/>
                                Dados Gerais
                            </li>
                            <li className="sidebarListItem ">
                                <Report className="sidebarIcon"/>
                                Ocorrências
                            </li>
                        </ul>
                   
                </div>
            </div>
        </div>
    )
}
=======
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
>>>>>>> ce5a671894f37aee6ede00bf2e76631e118d4943
