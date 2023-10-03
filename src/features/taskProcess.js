import { ACTIONS } from "../libs/action.constants";

const reducer = (state, action) => {
  if (action.type === ACTIONS.CREATE) {
    return [...state, { id: Date.now(), task: action.payload }];
  }
  if (action.type === ACTIONS.DELETE) {
    return state.filter(({ id }) => id !== action.payload.id);
  }
};

export default reducer;
