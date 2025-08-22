export const SET_ADDRESS_LOADING = "address/SET_LOADING";
export const SET_ADDRESS_LIST    = "address/SET_LIST";
export const UPSERT_ADDRESS      = "address/UPSERT";
export const REMOVE_ADDRESS      = "address/REMOVE";
export const SET_SELECTED_IDS    = "address/SET_SELECTED_IDS";

export const setAddressLoading = (bool) => ({ type: SET_ADDRESS_LOADING, payload: !!bool });
export const setAddressList    = (list) => ({ type: SET_ADDRESS_LIST, payload: Array.isArray(list) ? list : [] });
export const upsertAddress     = (addr) => ({ type: UPSERT_ADDRESS, payload: addr });
export const removeAddress     = (id)   => ({ type: REMOVE_ADDRESS, payload: id });
export const setSelectedIds    = (obj)  => ({ type: SET_SELECTED_IDS, payload: obj });

export const selectShipping = (id) => setSelectedIds({ shippingId: id });
export const selectBilling  = (id) => setSelectedIds({ billingId:  id });
