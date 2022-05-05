import React from "react"
import s from './Service.module.sass'
import Button from "../../../UI/Button"

export default function Service({text, color}){
    const style = {
        backgroundColor: color
    }
  return (
    <div className={s.service} style={style}>
        <p>
            {text}
        </p>
        <Button>Подробнее</Button>
    </div>
  )
    
}