import React from 'react';
import CardList from '../CardList/CardList';
import CardFormCreate from '../CardFormCreate/CardFormCreate';
import CardSort from '../CardsSort/CardSort';
import style from './Card.module.css'


export default function Cards() {

  return (
    <>
      <div className={style.header}>
        <CardFormCreate />
        <CardSort />
      </div>
      <hr style={{margin: "15px 0"}}/>
      <CardList  title='Заметки 1' />
    </>
  );
}

