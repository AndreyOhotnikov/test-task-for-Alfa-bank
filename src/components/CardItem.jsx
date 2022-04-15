import React from "react";
import '../styles/App.css';
import MyButton from "./button/MyButton";
import { useDispatch } from 'react-redux';
import { deleteCardReducer } from "../store/actions";
import { addLikeReducer, delLikeReducer } from "../store/actions";

export default function CardItem ({card}) {
  const dispatche = useDispatch()

  const deleteCard = async (id) => {
    dispatche(deleteCardReducer(id))
  }

  const checkOn = (e, id) => {
    console.log(id, e.target.checked)
    if (!card.isLike) dispatche(addLikeReducer(id)) 
    else dispatche(delLikeReducer(id))
    console.log(card.isLike)
  }

  
  return (
    <div className='card' id={card.id} style={{display: 'flex', flexDirection: "column"}}>
        <div className='card_content' style={{border: '1px solid brown'}}>
          <img style={{maxWidth: '60%'}} src={card.src} alt="картинка кота" />
        </div>
        id: {card.id}
        <div className="card__btns" style={{border: '1px solid brown'}}>
        <img style={{maxWidth: '20px', cursor: 'pointer'}} src={card.isLike ? "like-ok.png" : "like-off.png"} alt="" onClick={(e) => checkOn(e, card.id)} />
        {card.likes}
        <MyButton style={{width: '60px'}} onClick={() => deleteCard(card.id)}>Удалить</MyButton>
        </div>
    </div>
    
  )
}


