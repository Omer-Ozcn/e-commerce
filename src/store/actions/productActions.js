import {
  SET_CATEGORIES, SET_PRODUCT_LIST, SET_TOTAL, SET_FETCH_STATE,
  SET_LIMIT, SET_OFFSET, SET_FILTER
} from "./types";

export const setCategories  = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProductList = (list) => ({ type: SET_PRODUCT_LIST, payload: list });
export const setTotal       = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState  = (state) => ({ type: SET_FETCH_STATE, payload: state });
export const setLimit       = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset      = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter      = (filter) => ({ type: SET_FILTER, payload: filter });
