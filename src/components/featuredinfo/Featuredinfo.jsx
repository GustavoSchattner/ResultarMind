import React from 'react'
import "./featuredinfo.css"
import {ArrowDownward} from "@material-ui/icons"

export default function Featuredinfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Batata</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">R$45,00 dinheiros</span>
                    <span className="featuredMoneyRate">-12,00 dinheiros<ArrowDownward/></span>
                </div>
                <span className="featuredSub">Comparado ao Mês Anterior</span>
            </div>
        </div>
    )
}
