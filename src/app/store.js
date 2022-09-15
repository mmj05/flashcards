import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";
import cardsReducer from "../features/cards/cardsSlice";

const rootReducer = {
  topics: topicsReducer,
  quizzes: quizzesReducer,
  cards: cardsReducer
}

const store = configureStore({
  reducer: rootReducer
});

export default store;

