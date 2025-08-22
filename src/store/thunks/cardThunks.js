import axiosInstance from "../../api/axiosInstance";
import { setCardLoading, setCardList, upsertCard, removeCard, selectCardId } from "../actions/cardActions";

const authHeaders = (getState) => {
  const token = getState()?.user?.token || localStorage.getItem("token");
  return token ? { Authorization: token } : {};
};

export const fetchCards = () => async (dispatch, getState) => {
  try {
    dispatch(setCardLoading(true));
    const res = await axiosInstance.get("/user/card", { headers: authHeaders(getState) });
    const data = Array.isArray(res?.data) ? res.data : [];
    dispatch(setCardList(data));
    return data;
  } catch (e) {
    dispatch(setCardList([]));
    console.error("fetchCards failed:", e);
    throw e;
  } finally {
    dispatch(setCardLoading(false));
  }
};

export const createCard = (payload) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.post("/user/card", payload, { headers: authHeaders(getState) });
    const saved = res?.data || payload;
    dispatch(upsertCard(saved));
    return saved;
  } catch (e) {
    console.error("createCard failed:", e);
    throw e;
  }
};

export const updateCard = (payload) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.post("/user/card", payload, {
      headers: { ...authHeaders(getState), "X-HTTP-Method-Override": "PUT" },
    });
    const saved = res?.data || payload;
    dispatch(upsertCard(saved));
    return saved;
  } catch (e) {
    console.error("updateCard failed:", e);
    throw e;
  }
};

export const deleteCard = (id) => async (dispatch, getState) => {
  try {
    await axiosInstance.delete(`/user/card/${id}`, { headers: authHeaders(getState) });
    dispatch(removeCard(id));
    return true;
  } catch (e) {
    console.error("deleteCard failed:", e);
    throw e;
  }
};

export const selectCard = (id) => (dispatch) => {
  dispatch(selectCardId(id));
  return id;
};
