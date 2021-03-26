import React from 'react'
import css from './Card.css'
const Card = ({el}) => {
    return (
    <div className={css.card}>
        <img style={{width:180, height:150}} src={el.img}alt=""/>
        <h3 style={{marginLeft:35,color:"green"}}>{el.title}</h3>
        <p style={{marginLeft:10,marginRight:10,fontFamily:'bold'}}>{el.ingredienty}</p>
        <h2 style={{marginLeft:60}}>{el.cena}</h2>
        <h4 style={{marginLeft:60}}>{el.wtuk}</h4>
        <h5 style={{marginLeft:60}}>{el.kaloriinostkkal}</h5>
        <button style={{backgroundColor:'skyblue'}}>{el.btnB}</button>
        <input type="text"/>
        <button style={{backgroundColor:'skyblue'}}>{el.btnC}</button>
        <div>
        <button style={{backgroundColor:'skyblue',width:209}}>{el.btnD}</button>
        </div>
    </div>
    )
}
export {Card}