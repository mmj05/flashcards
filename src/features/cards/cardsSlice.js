import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: 'cards',
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.payload.id]: {
            id: action.payload.id,
            front: action.payload.front,
            back: action.payload.back
          }
        }
      };
    }
  }
};

const cardsSlice = createSlice(options);

export default cardsSlice.reducer;

export const { addCard } = cardsSlice.actions;