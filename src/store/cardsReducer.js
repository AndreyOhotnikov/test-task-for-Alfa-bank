import { types } from "./types";

const defaultState = {
  cards: [],
  cardsIsLike: false
};

export const cardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_LIKE:
      return {...state, 
        cards: [...state.cards.map(card => {
          if (card.id === action.payload) {
            card.isLike = true;
            card.likes += 1;
          } 
          return card;
        })], 
      }
    case types.DEL_LIKE:
      return {...state, 
        cards: [...state.cards.map(card => {
          if (card.id === action.payload) {
            card.isLike = false;
            card.likes -= 1; 
          } 
          return card; 
        })], 
      }
    
    case types.CREATE_CARD:
      return {...state, 
        cards: [...state.cards, 
          {id: action.payload.id, src: action.payload.url, likes: Math.floor(Math.random()*20), isLike: false}
        ],
      }

    case types.DELL_CARDS:
        return {...state,
          cards: state.cards.filter(card => card.id !== action.payload),
        }

    case types.SORT_CARDS:
      return {...state,
        cardsIsLike: !state.cardsIsLike
      }
  
    default:
      return state;
    }
  }
