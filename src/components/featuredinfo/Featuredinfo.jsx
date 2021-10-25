import React from 'react'
import "./featuredinfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

export default function Featuredinfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Sistema</span>
                <div className="featuredMoneyContainer"><br />
                    <span className="featuredMoney">R$4500,00</span><br />
                    <span className="featuredMoneyRate">-120,00<ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Comparado ao Mês Anterior</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Vendas</span>
                <div className="featuredMoneyContainer"><br />
                    <span className="featuredMoney">R$3500,00</span><br />
                    <span className="featuredMoneyRate">+1020,00<ArrowUpward className="featuredIcon positive"/></span>
                </div>
                <span className="featuredSub">Comparado ao Mês Anterior</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Despesas</span>
                <div className="featuredMoneyContainer"><br />
                    <span className="featuredMoney">R$260,00</span><br />
                    <span className="featuredMoneyRate">-80,00<ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Comparado ao Mês Anterior</span>
            </div>
        </div>
    )
}
