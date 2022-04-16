import React from "react";
import PostItem from "../CardItem/CardItem";
import { useSelector } from 'react-redux';

export default function CardList () {
  const {cards, cardsIsLike} = useSelector(state => state.cards)

  const style = {
    display: 'flex',
    flexWrap: 'wrap'
  }

  if (!cards.length) return <h1>Создай карточку</h1>
  else return (
    <div style={style}>
      {cards.map((card) => {
        return  (card.isLike || cardsIsLike === card.isLike) && <PostItem  card={card} key={card.id} />
      })}
    </div>
  )
}
