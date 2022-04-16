import React from "react";
import { useDispatch } from 'react-redux';
import { createCard } from "../../store/asyncActions/createCard";
import style from "./CardFormCreate.module.css";

export default function CardFormCreate () {
  const dispatche = useDispatch()
  
  const createNewCard = async () => {
    dispatche(createCard())
  }

  return <img className={style.btn} src="icons/cats.png" onClick={createNewCard} alt="" />
}


