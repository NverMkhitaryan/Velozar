import React from "react"
import s from './About.module.sass'
import image from './image.jpg'


export default function About(){
    return(
        <div className={s.about}>
            <section className={s.top_sec}>
                <div className={s.text}>
                    <h2>Что мы предлагаем</h2>
                    <p>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, 
                       ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО 
                       велосипеда помогает избежать многих проблем и дорогого ремонта.  
                       Все работы выполняем качественно и с душой. 
                    </p>
                </div>
                <div className={s.picture}>
                    <img src={image} alt="Bike"/>
                </div>
            </section>
            <section className={s.bottom_sec}>
                    <p>Приехав к нам однажды, многие наши клиенты становятся постоянными, 
                       а часть из них даже друзьями. А также в нашей мастерской можно отремонтировать 
                       электросамокат и электровелосипед.
                    </p>
            </section>
            

        </div>
    )
}