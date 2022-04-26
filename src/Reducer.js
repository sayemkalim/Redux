import { createReducer } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
  c:0,
}
export const customReducer = createReducer(initialState, {
  increment: (state, action) => {
    state.c = state.c + 1;
  },

  incrementbyValue: (state, action) => {
    // state.c=state+1;
    state.c = state.c  + action.payload;
  },

  decrement: (state, action) => {
    state.c = state.c  - 1;
  },
});
