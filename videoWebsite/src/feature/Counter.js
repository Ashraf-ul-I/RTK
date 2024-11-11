import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = { value: 0 };

// Define actions
const increment = createAction("increment");
const decrement = createAction("decrement");

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value += 1;
    })
    .addCase(decrement, (state) => {
      state.value -= 1;
    });
});

export { increment, decrement };
export default reducer;
