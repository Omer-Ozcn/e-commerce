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

const normalizeAddress = (a = {}) => ({
  id: a.id ?? a.address_id ?? a.addressId ?? a._id,
  title: a.title ?? "",
  name: a.name ?? "",
  surname: a.surname ?? "",
  phone: a.phone ?? "",
  city: (a.city ?? "").toLowerCase(),
  district: (a.district ?? "").toLowerCase(),
  neighborhood: a.neighborhood ?? a.address ?? "",
});

export const fetchAddresses = () => async (dispatch, getState) => {
  try {
    dispatch(setAddressLoading(true));
    const res = await axiosInstance.get("/user/address", { headers: authHeaders(getState) });
    const arr = Array.isArray(res?.data) ? res.data : [];
    dispatch(setAddressList(arr.map(normalizeAddress)));
    return arr;
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
    const res = await axiosInstance.post("/user/address", payload, { headers: authHeaders(getState) });
    const saved = normalizeAddress({ ...payload, ...(res?.data || {}) });
    dispatch(upsertAddress(saved));
    return saved;
  } catch (e) {
    console.error("createAddress failed:", e);
    throw e;
  }
};

export const updateAddress = (payload) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.post("/user/address", payload, {
      headers: { ...authHeaders(getState), "X-HTTP-Method-Override": "PUT" },
    });
    const saved = normalizeAddress({ ...payload, ...(res?.data || {}) });
    dispatch(upsertAddress(saved));
    return saved;
  } catch (e) {
    console.error("updateAddress failed:", e);
    throw e;
  }
};

export const deleteAddress = (id) => async (dispatch, getState) => {
  try {
    if (id == null) return false;
    await axiosInstance.delete(`/user/address/${id}`, { headers: authHeaders(getState) });
    dispatch(removeAddress(id));
    return true;
  } catch (e) {
    console.error("deleteAddress failed:", e);
    throw e;
  }
};

export const addAddress = createAddress;
