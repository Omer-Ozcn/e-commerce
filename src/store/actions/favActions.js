import { FAV_ADD, FAV_REMOVE, FAV_CLEAR } from "./types";

export const addFavorite = (product) => ({ type: FAV_ADD, payload: product });
export const removeFavorite = (id) => ({ type: FAV_REMOVE, payload: id });
export const clearFavorites = () => ({ type: FAV_CLEAR });

export const toggleFavorite = (product) => (dispatch, getState) => {
  const items = getState()?.favorites?.items || [];
  const exists = items.some((x) => String(x.id) === String(product.id));
  if (exists) dispatch(removeFavorite(product.id));
  else dispatch(addFavorite(product));
};
