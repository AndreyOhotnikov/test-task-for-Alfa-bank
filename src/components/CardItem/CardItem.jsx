import React from "react";
import style from "./CardItem.module.css";
import { useDispatch } from 'react-redux';
import { deleteCardReducer, addLikeReducer, delLikeReducer } from "../../store/actions";

export default function CardItem ({card}) {
  const dispatche = useDispatch()

  const deleteCard = async (id) => {
    dispatche(deleteCardReducer(id))
  }

  const checkOn = (e, id) => {
    if (!card.isLike) dispatche(addLikeReducer(id)) 
    else dispatche(delLikeReducer(id))
  }

  return (
    <div className={style.card} id={card.id}>
        <div className={style.card_content} >
          <img className={style.card_picture} src={card.src} alt="картинка кота" />
        </div>
        <div className={style.card__btns} >
          <figure style={{display: 'flex'}}>
              <img className={style.card_btn_icon} src={card.isLike ? "icons/like-ok.png" : "icons/like-off.png"} alt="" onClick={(e) => checkOn(e, card.id)}/>
              <figcaption>{card.likes}</figcaption>
          </figure>
          id: {card.id}
          <img className={style.card_btn_icon} src="icons/del.png" alt="" onClick={() => deleteCard(card.id)} />
        </div>
    </div>
    
  )
}


