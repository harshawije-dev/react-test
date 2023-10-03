const reducer = (state, action) => {
  if (action.type === "CREATE") {
    return [...state, { id: Date.now(), task: action.payload }];
  }
  if (action.type === "DELETE") {
    return state.filter(({ id }) => id !== action.payload.id);
  }
};

export default reducer;
