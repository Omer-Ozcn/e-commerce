import {
  CARD_SET_LOADING,
  CARD_SET_LIST,
  CARD_UPSERT,
  CARD_REMOVE,
  CARD_SELECT_ID,
} from "../actions/types";

const initial = { list: [], loading: false, selectedId: null };

export default function card(state = initial, action) {
  switch (action.type) {
    case CARD_SET_LOADING: return { ...state, loading: !!action.payload };
    case CARD_SET_LIST: {
      const list = action.payload;
      const first = list[0]?.id ?? null;
      return { ...state, list, selectedId: state.selectedId ?? first };
    }
    case CARD_UPSERT: {
      const c = action.payload || {};
      const exists = state.list.some((x) => String(x.id) === String(c.id));
      const next = exists ? state.list.map((x) => (String(x.id) === String(c.id) ? { ...x, ...c } : x)) : [...state.list, c];
      return { ...state, list: next, selectedId: state.selectedId ?? c.id ?? null };
    }
    case CARD_REMOVE: {
      const id = action.payload;
      const next = state.list.filter((x) => String(x.id) !== String(id));
      return { ...state, list: next, selectedId: String(state.selectedId) === String(id) ? next[0]?.id ?? null : state.selectedId };
    }
    case CARD_SELECT_ID: return { ...state, selectedId: action.payload };
    default: return state;
  }
}
