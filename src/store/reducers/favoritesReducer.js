import { FAV_ADD, FAV_REMOVE, FAV_CLEAR } from "../actions/types";

const initial = { items: [] };

export default function favorites(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      if (!action.payload?.id) return state;
      if (state.items.some((x) => String(x.id) === String(action.payload.id))) return state;
      return { ...state, items: [...state.items, action.payload] };

    case FAV_REMOVE:
      return {
        ...state,
        items: state.items.filter((x) => String(x.id) !== String(action.payload)),
      };

    case FAV_CLEAR:
      return { ...state, items: [] };

    default:
      return state;
  }
}
