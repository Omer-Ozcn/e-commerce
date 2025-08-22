import {
  ORDER_CREATE_START,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_LIST_START,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
} from "../actions/types";

const initial = {
  creating: false,
  createError: null,

  listLoading: false,
  listError: null,
  list: [],          
};

export default function order(state = initial, action) {
  switch (action.type) {
    case ORDER_CREATE_START:
      return { ...state, creating: true, createError: null };
    case ORDER_CREATE_SUCCESS:
      return { ...state, creating: false, createError: null };
    case ORDER_CREATE_FAIL:
      return { ...state, creating: false, createError: action.payload || true };

    case ORDER_LIST_START:
      return { ...state, listLoading: true, listError: null };
    case ORDER_LIST_SUCCESS:
      return { ...state, listLoading: false, list: Array.isArray(action.payload) ? action.payload : [] };
    case ORDER_LIST_FAIL:
      return { ...state, listLoading: false, listError: action.payload || true, list: [] };

    default:
      return state;
  }
}
