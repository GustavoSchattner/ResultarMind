import React from 'react'
import Chart from '../../chart/Chart'
import Featuredinfo from '../../featuredinfo/Featuredinfo'
import "./Home.css"
import { userData } from '../../../dummyData'
import WidgetLg from '../../widgetLg/WidgetLg'
import WidgetSm from '../../widgetSm/WidgetSm'

export default function Home() {
    return (
        <div className="home">
            <Featuredinfo/>
            <Chart data={userData} title = "Análise do Usuário" grid dataKey = "Usuário" />
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
