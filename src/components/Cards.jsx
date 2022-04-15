import React from 'react';
import '../styles/App.css';
import CardList from './CardList';
import PostFormCreate from './CardFormCreate';
import FilterPost from './FilterCard';


export default function Cards() {

    return (
      <div className="App" style={{width: '100%', border: '1ps solid black'}}>
        <PostFormCreate />
        <hr style={{margin: "15px 0"}}/>
        <FilterPost/>
        <CardList  title='Заметки 1' />
      </div>
      );
  // }
    
  
}

