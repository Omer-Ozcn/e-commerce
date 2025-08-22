import axiosInstance, { setAuthToken } from "../../api/axiosInstance";
import { SET_USER } from "../actions/types";
import { logoutUser } from "../actions/userActions";

export const initAuth = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) return;
  setAuthToken(token);
  dispatch({ type: SET_USER, payload: { user: null, token } });
  try { await dispatch(fetchMe()); } catch { dispatch(logout()); }
};

export const login = (email, password) => async (dispatch) => {
  const res = await axiosInstance.post("/login", { email, password });
  const { token, ...user } = res?.data || {};
  if (!token) throw new Error("Login başarısız: sunucu token döndürmedi.");
  localStorage.setItem("token", token);
  setAuthToken(token);
  dispatch({ type: SET_USER, payload: { user, token } });
  return res.data;
};

export const register = (payload) => async (dispatch) => {
  const res = await axiosInstance.post("/register", payload);
  const { token, ...user } = res?.data || {};
  if (token) {
    localStorage.setItem("token", token);
    setAuthToken(token);
    dispatch({ type: SET_USER, payload: { user, token } });
  }
  return res.data;
};

export const fetchMe = () => async (dispatch, getState) => {
  const token = getState()?.user?.token || localStorage.getItem("token");
  if (!token) return null;
  try {
    const res = await axiosInstance.get("/user", { headers: { Authorization: token } });
    const data = res?.data || {};
    dispatch({ type: SET_USER, payload: { user: data, token } });
    return data;
  } catch {
    dispatch(logout());
    return null;
  }
};

export const logout = () => (dispatch) => {
  try { localStorage.removeItem("token"); } catch {}
  setAuthToken(null);
  dispatch(logoutUser());
};
