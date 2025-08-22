export const ORDER_CREATE_START   = "order/CREATE_START";
export const ORDER_CREATE_SUCCESS = "order/CREATE_SUCCESS";
export const ORDER_CREATE_FAIL    = "order/CREATE_FAIL";
export const ORDER_RESET          = "order/RESET";

export const orderCreateStart   = () => ({ type: ORDER_CREATE_START });
export const orderCreateSuccess = (payload) => ({ type: ORDER_CREATE_SUCCESS, payload });
export const orderCreateFail    = (err) => ({ type: ORDER_CREATE_FAIL, payload: err });
export const orderReset         = () => ({ type: ORDER_RESET });
