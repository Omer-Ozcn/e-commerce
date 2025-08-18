import axiosInstance from "../../api/axiosInstance";
import { setCategories } from "../actions/productActions";

let inFlight = false;
export const fetchCategoriesIfNeeded = () => {
  return async (dispatch, getState) => {
    const has = getState().product?.categories?.length;
    if (has || inFlight) return;
    inFlight = true;
    try {
      const res = await axiosInstance.get("/categories");
      const data = Array.isArray(res.data) ? res.data : (res.data?.categories || []);
      dispatch(setCategories(data));
    } finally {
      inFlight = false;
    }
  };
};
