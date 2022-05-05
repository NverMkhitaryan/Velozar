import React from "react"
import s from './Main.module.sass'
import About from './About'
import Services from './Services'



export default function Main(){
    return(
        <main className={s.main}>
            <About/>
            <Services/>
        </main>

    )
}