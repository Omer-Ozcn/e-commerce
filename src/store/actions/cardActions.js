// ---- constants
export const CARD_SET_LOADING = "card/SET_LOADING";
export const CARD_SET_LIST    = "card/SET_LIST";
export const CARD_UPSERT      = "card/UPSERT";
export const CARD_REMOVE      = "card/REMOVE";
export const CARD_SELECT_ID   = "card/SELECT_ID";

// ---- action creators
export const setCardLoading = (b)      => ({ type: CARD_SET_LOADING, payload: !!b });
export const setCardList    = (arr)    => ({ type: CARD_SET_LIST,    payload: Array.isArray(arr) ? arr : [] });
export const upsertCard     = (card)   => ({ type: CARD_UPSERT,      payload: card });
export const removeCard     = (id)     => ({ type: CARD_REMOVE,      payload: id });
export const selectCard     = (id)     => ({ type: CARD_SELECT_ID,   payload: id });
