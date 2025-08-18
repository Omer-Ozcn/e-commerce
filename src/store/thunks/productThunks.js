import axiosInstance from "../../api/axiosInstance";
import {
  setProductList,
  setTotal,
  setFetchState,
} from "../actions/productActions";


export const fetchProducts = (opts = {}) => async (dispatch, getState) => {
  const state = getState().product || {};
  const limit = opts.limit ?? state.limit ?? 25;
  const offset = opts.offset ?? state.offset ?? 0;

  const params = { limit, offset };
  if (opts.filter) params.filter = opts.filter;
  if (opts.sort) params.sort = opts.sort;
  if (opts.categoryId) params.category = opts.categoryId; 

  try {
    dispatch(setFetchState("LOADING"));
    const res = await axiosInstance.get("/products", { params });
    const data = res.data || {};

    const products = Array.isArray(data.products)
      ? data.products
      : Array.isArray(data)
      ? data
      : [];

    const total = Number(data.total) || products.length || 0;

    dispatch(setProductList(products));
    dispatch(setTotal(total));
    dispatch(setFetchState("SUCCEEDED"));
  } catch (err) {
    console.error("fetchProducts failed:", err);
    dispatch(setFetchState("FAILED"));
  }
};
