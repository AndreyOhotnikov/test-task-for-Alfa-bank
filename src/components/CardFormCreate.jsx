import React from "react";
import MyButton from './button/MyButton';
import { useDispatch } from 'react-redux';
import { createCard } from "../store/asyncActions/createCard";

export default function PostFormCreate () {
  const dispatche = useDispatch()
  
  const createNewCard = async (e) => {
    e.preventDefault()
    dispatche(createCard())
    
  }

  return (
      <form>
          <MyButton  onClick={createNewCard}>Создать Карточку</MyButton>
        </form>
      )
}

// export default PostFormCreate
