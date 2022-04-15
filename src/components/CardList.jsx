import React from "react";
import PostItem from "./CardItem";
import { useSelector } from 'react-redux';

export default function CardList ({title, sortedPost}) {
    const cards = useSelector(state => state.cards.cards)

  return (
    <div style={{width: '80%', border: '1px solid black', display: 'flex', flexWrap: 'wrap'}}>
      {cards.map((card) => <PostItem  card={card} key={card.id} />)}
    </div>
  )
}

