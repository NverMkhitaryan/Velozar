import React from "react"
import s from './Services.module.sass'
import Service from './Service'


export default function Services(){
    const listCard = [
        {
            text: 'Годовое ТО',
            color: '#22356F',
        },
        {
            text: 'Выравнивание колес',
            color: '#0052C1',
        },
        {
            text: 'Настройка переключателей',
            color: '#76B58B',
        }
    ]
    
    return(
       <div className={s.services}>
           {listCard.map((t) => <Service
                                    text = {t.text}
                                    color = {t.color}
                                />)}
           

       </div>
    )
}