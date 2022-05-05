import React from "react"
import s from './Nav.module.sass'
import logo from './logo.png'
import Button from '../UI/Button'


export default function Nav(){
    return(
        <nav className={s.navigation}>
            <a href="#"><img src={logo} alt="Velozar" /></a>
            <ul>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Аренда</a></li>
            </ul>
            <Button>Связаться</Button>

        </nav>
    )
}