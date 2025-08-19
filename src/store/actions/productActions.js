import {
  SET_CATEGORIES, SET_PRODUCT_LIST, SET_TOTAL, SET_FETCH_STATE,
  SET_LIMIT, SET_OFFSET, SET_FILTER,
  SET_PRODUCT_LOADING, SET_CURRENT_PRODUCT, 
} from "./types";

export const setCategories  = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProductList = (list) => ({ type: SET_PRODUCT_LIST, payload: list });
export const setTotal       = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState  = (state) => ({ type: SET_FETCH_STATE, payload: state });
export const setLimit       = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset      = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter      = (filter) => ({ type: SET_FILTER, payload: filter });

export const setProductLoading  = (isLoading) => ({ type: SET_PRODUCT_LOADING, payload: isLoading });
export const setCurrentProduct  = (product)   => ({ type: SET_CURRENT_PRODUCT, payload: product });
