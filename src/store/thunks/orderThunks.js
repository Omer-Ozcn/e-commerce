import axiosInstance from "../../api/axiosInstance";
import {
  ORDER_CREATE_START,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_LIST_START,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
} from "../actions/types";

const authHeaders = (getState) => {
  const token = getState()?.user?.token || localStorage.getItem("token");
  return token ? { Authorization: token } : {};
};

const BASE_SHIPPING = 29.99;
const FREE_SHIPPING_LIMIT = 150;

export const createOrder = ({ cvv }) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_START });

    const state = getState();

    const cartArr = Array.isArray(state.cart?.cart) ? state.cart.cart : [];
    const selected = cartArr.some((x) => x?.checked) ? cartArr.filter((x) => x.checked) : cartArr;
    if (selected.length === 0) throw new Error("Sepette ürün yok.");

    const subtotal = selected.reduce(
      (sum, x) => sum + Number(x?.product?.price || 0) * Number(x?.count || 0),
      0
    );
    const shippingBase = selected.length > 0 ? BASE_SHIPPING : 0;
    const shippingDiscount = subtotal >= FREE_SHIPPING_LIMIT ? BASE_SHIPPING : 0;
    const shippingPay = Math.max(0, shippingBase - shippingDiscount);
    const price = Number((subtotal + shippingPay).toFixed(2));

    const products = selected.map((x) => ({
      product_id: x?.product?.id ?? x?.id,
      count: Number(x?.count || 0),
      detail: [x?.product?.color, x?.product?.size].filter(Boolean).join(" - "),
    }));

    const address_id = state.address?.shippingId || state.address?.billingId;
    if (!address_id) throw new Error("Adres seçili değil.");

    const cardState = state.card || {};
    const selectedCard = (cardState.list || []).find((c) => String(c.id) === String(cardState.selectedId));
    if (!selectedCard) throw new Error("Kart seçili değil.");

    const card_no_str = String(selectedCard.card_no || "").replace(/\s+/g, "");
    const card_name = selectedCard.name_on_card || "";
    const card_expire_month = Number(selectedCard.expire_month || 0);
    const card_expire_year  = Number(selectedCard.expire_year  || 0);
    if (card_no_str.length !== 16) throw new Error("Kart numarası hatalı.");
    if (!card_expire_month || !card_expire_year) throw new Error("Son kullanma tarihi eksik.");
    if (!cvv || String(cvv).length < 3) throw new Error("CVV eksik/hatalı.");

    const payload = {
      address_id,
      order_date: new Date().toISOString().slice(0, 19),
      card_no: Number(card_no_str),
      card_name,
      card_expire_month,
      card_expire_year,
      card_ccv: Number(cvv),
      price,
      products,
    };

    const res = await axiosInstance.post("/order", payload, { headers: authHeaders(getState) });
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: res?.data || payload });

    dispatch({ type: SET_CART, payload: [] });
    dispatch({ type: SET_PAYMENT, payload: {} });
    dispatch({ type: SET_ADDRESS, payload: {} });

    return res?.data || payload;
  } catch (err) {
    dispatch({ type: ORDER_CREATE_FAIL, payload: err });
    throw err;
  }
};

export const fetchOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_START });
    const res = await axiosInstance.get("/order", { headers: authHeaders(getState) });
    const data = Array.isArray(res?.data) ? res.data : [];
    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
    return data;
  } catch (err) {
    dispatch({ type: ORDER_LIST_FAIL, payload: err });
    throw err;
  }
};
