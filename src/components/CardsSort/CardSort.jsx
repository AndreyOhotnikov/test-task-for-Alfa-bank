import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { sortReducer } from "../../store/actions";
import style from './CardSort.module.css'

export default function CardSort () {

  const dispatche = useDispatch()
  const [isSortLike, setIsSortLike] = useState(false)
  
  const sortLike = (e) => {
    if (e.target.src.split('/').at(-1) === "like-off.png") {
      dispatche(sortReducer())
      setIsSortLike(true)
    } 
    else {
      dispatche(sortReducer())
      setIsSortLike(false)
    } 
  }

  return (
    <div className={style.sort_block}>
      <span>Показать понравившиеся </span>
      <img 
        className={style.sort_btn} 
        src={isSortLike ? "icons/like-ok.png" : "icons/like-off.png"} 
        alt="Эмблема 'Палец вверх'" 
        onClick={(e) => sortLike(e)}
      />
    </div>
  )
}

