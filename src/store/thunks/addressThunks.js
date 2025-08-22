import axiosInstance from "../../api/axiosInstance";
import {
  setAddressLoading,
  setAddressList,
  upsertAddress,
  removeAddress,
} from "../actions/addressActions";

const authHeaders = (getState) => {
   const token = getState()?.user?.token || localStorage.getItem("token");
   return token ? { Authorization: token } : {};
};

export const fetchAddresses = () => async (dispatch, getState) => {
  try {
    dispatch(setAddressLoading(true));
    const res = await axiosInstance.get("/user/address", {
      headers: authHeaders(getState),
    });
    dispatch(setAddressList(res?.data || []));
    return res?.data || [];
  } catch (e) {
    console.error("fetchAddresses failed:", e);
    dispatch(setAddressList([]));
    throw e;
  } finally {
    dispatch(setAddressLoading(false));
  }
};

export const createAddress = (payload) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.post("/user/address", payload, {
      headers: authHeaders(getState),
    });
    const saved = res?.data || payload;
    dispatch(upsertAddress(saved));
    return saved; 
  } catch (e) {
    console.error("createAddress failed:", e);
    throw e;
  }
};

export const updateAddress = (payload) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.put("/user/address", payload, {
      headers: authHeaders(getState),
    });
    const saved = res?.data || payload;
    dispatch(upsertAddress(saved));
    return saved;
  } catch (e) {
    console.error("updateAddress failed:", e);
    throw e;
  }
};

export const deleteAddress = (id) => async (dispatch, getState) => {
  try {
    await axiosInstance.delete(`/user/address/${id}`, {
      headers: authHeaders(getState),
    });
    dispatch(removeAddress(id));
    return true;
  } catch (e) {
    console.error("deleteAddress failed:", e);
    throw e;
  }
};


export const addAddress = createAddress;
