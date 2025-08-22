import {
  CARD_SET_LOADING,
  CARD_SET_LIST,
  CARD_UPSERT,
  CARD_REMOVE,
  CARD_SELECT_ID,
} from "./types";

export const setCardLoading = (bool) => ({ type: CARD_SET_LOADING, payload: !!bool });
export const setCardList    = (list) => ({ type: CARD_SET_LIST, payload: Array.isArray(list) ? list : [] });
export const upsertCard     = (card) => ({ type: CARD_UPSERT, payload: card });
export const removeCard     = (id)   => ({ type: CARD_REMOVE, payload: id });
export const selectCardId   = (id)   => ({ type: CARD_SELECT_ID, payload: id });
