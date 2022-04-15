import { types } from "./types"

const defaultState = {
  cards: [
    {id: 123, src: 'https://vjoy.cc/wp-content/uploads/2019/09/hd-wallpaper-for-mobile-1080x1920-5.jpg', likes: Math.floor(Math.random()*20), isLike: false},
    {id: 124, src: 'https://bipbap.ru/wp-content/uploads/2017/06/4-5.jpg', likes: Math.floor(Math.random()*20), isLike: false},
    {id: 125, src: 'https://bipbap.ru/wp-content/uploads/2021/11/oboi-vertikalnye-krasivye_46.jpg', likes: Math.floor(Math.random()*20), isLike: false},
    {id: 126, src: 'https://vjoy.cc/wp-content/uploads/2019/09/3-24.jpg', likes: Math.floor(Math.random()*20), isLike: false}

  ],

}


export const cardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_LIKE:
      console.log(action)
      return {...state, 
        cards: [...state.cards.map(card => {
          if (card.id === action.payload) {
            card.isLike = true;
            card.likes += 1 
            console.log(card)
          } 
          return card;
        })], 
      }
    case types.DEL_LIKE:
      return {...state, 
        cards: [...state.cards.map(card => {
          if (card.id === action.payload) {
            card.isLike = false;
            card.likes -= 1 
          } 
          return card; 
        })], 
      }
    
     case types.CREATE_CARD:
       console.log(3333333)
      return {...state, 
        cards: [...state.cards, {id: action.payload.id, src: action.payload.url, likes: Math.floor(Math.random()*20), isLike: false}], 
      }

    case types.DELL_CARDS:
      return {...state,
        cards: state.cards.filter(card => card.id !== action.payload),
        }

  
    default:
      return state;
    }
  }
