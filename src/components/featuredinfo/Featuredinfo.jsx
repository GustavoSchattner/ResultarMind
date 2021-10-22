import React from 'react'
import "./featuredinfo.css"
import {ArrowDownward} from "@material-ui/icons"

export default function Featuredinfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Comercial Carvalho</span>
                <div className="featuredMoneyContainer"><br />
                    <span className="featuredMoney">R$4500,00 dinheiros</span><br />
                    <span className="featuredMoneyRate">-120,00 dinheiros<ArrowDownward/></span>
                </div>
                <span className="featuredSub">Comparado ao Mês Anterior</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Comercial Carvalho</span>
                <div className="featuredMoneyContainer"><br />
                    <span className="featuredMoney">R$4500,00 dinheiros</span><br />
                    <span className="featuredMoneyRate">-120,00 dinheiros<ArrowDownward/></span>
                </div>
                <span className="featuredSub">Comparado ao Mês Anterior</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Comercial Carvalho</span>
                <div className="featuredMoneyContainer"><br />
                    <span className="featuredMoney">R$4500,00 dinheiros</span><br />
                    <span className="featuredMoneyRate">-120,00 dinheiros<ArrowDownward/></span>
                </div>
                <span className="featuredSub">Comparado ao Mês Anterior</span>
            </div>
        </div>
    )
}
