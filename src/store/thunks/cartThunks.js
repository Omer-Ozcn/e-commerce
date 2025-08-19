import { setCart } from "../actions/cartActions";


const persist = (cart) => {
  try { localStorage.setItem("cart", JSON.stringify(cart)); } catch {}
};

export const loadCartFromStorage = () => (dispatch) => {
  try {
    const raw = localStorage.getItem("cart");
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) dispatch(setCart(parsed));
  } catch {}
};

export const addToCart = (product, delta = 1) => (dispatch, getState) => {
  const cart = getState().cart?.cart || [];
  const idx = cart.findIndex((it) => String(it?.product?.id) === String(product?.id));
  let next = [...cart];

  if (idx >= 0) {
    const current = next[idx];
    const newCount = (Number(current.count) || 1) + delta;
    if (newCount <= 0) next.splice(idx, 1);
    else next[idx] = { ...current, count: newCount };
  } else if (delta > 0) {
    next.push({ count: delta, checked: true, product });
  }

  dispatch(setCart(next));
  persist(next);
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  const cart = getState().cart?.cart || [];
  const next = cart.filter((it) => String(it?.product?.id) !== String(productId));
  dispatch(setCart(next));
  persist(next);
};

export const toggleChecked = (productId) => (dispatch, getState) => {
  const cart = getState().cart?.cart || [];
  const next = cart.map((it) =>
    String(it?.product?.id) === String(productId) ? { ...it, checked: !it.checked } : it
  );
  dispatch(setCart(next));
  persist(next);
};

export const setAllChecked = (checked) => (dispatch, getState) => {
  const cart = getState().cart?.cart || [];
  const next = cart.map((it) => ({ ...it, checked: !!checked }));
  dispatch(setCart(next));
  persist(next);
};

export const clearCart = () => (dispatch) => {
  dispatch(setCart([]));
  persist([]);
};
