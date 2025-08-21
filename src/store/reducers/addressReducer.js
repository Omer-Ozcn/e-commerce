import {
  SET_ADDRESS_LOADING,
  SET_ADDRESS_LIST,
  UPSERT_ADDRESS,
  REMOVE_ADDRESS,
  SET_SELECTED_IDS,
} from "../actions/addressActions";

const initial = {
  list: [],
  loading: false,
  shippingId: null,
  billingId:  null,
};

export default function address(state = initial, action) {
  switch (action.type) {
    case SET_ADDRESS_LOADING:
      return { ...state, loading: !!action.payload };

    case SET_ADDRESS_LIST: {
      const list = action.payload;
      const firstId = list[0]?.id ?? null;
      return {
        ...state,
        list,
        shippingId: state.shippingId ?? firstId,
        billingId:  state.billingId  ?? firstId,
      };
    }

    case UPSERT_ADDRESS: {
      const a = action.payload || {};
      const exists = state.list.some((x) => String(x.id) === String(a.id));
      const next = exists
        ? state.list.map((x) => (String(x.id) === String(a.id) ? { ...x, ...a } : x))
        : [...state.list, a];
      return { ...state, list: next };
    }

    case REMOVE_ADDRESS: {
      const id = action.payload;
      const next = state.list.filter((x) => String(x.id) !== String(id));
      return {
        ...state,
        list: next,
        shippingId: String(state.shippingId) === String(id) ? next[0]?.id ?? null : state.shippingId,
        billingId:  String(state.billingId)  === String(id) ? next[0]?.id ?? null : state.billingId,
      };
    }

    case SET_SELECTED_IDS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
