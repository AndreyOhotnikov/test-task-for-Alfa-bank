import { types } from "./types"

export const createCardReducer = (payload) => ({type: types.CREATE_CARD, payload})
export const deleteCardReducer = (payload) => ({type: types.DELL_CARDS, payload})
export const addLikeReducer = (payload) => ({type: types.ADD_LIKE, payload})
export const delLikeReducer = (payload) => ({type: types.DEL_LIKE, payload})


