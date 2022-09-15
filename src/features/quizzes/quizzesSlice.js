import { createSlice } from "@reduxjs/toolkit";
import { addQuizForTopic } from '../topics/topicsSlice';

const options = {
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      return {
        ...state,
        quizzes: {
          ...state.quizzes,
          [action.payload.id]: {
            id: action.payload.id,
            name: action.payload.name,
            topicId: action.payload.topicId,
            cardIds: action.payload.cardIds
          }
        }
      }
    }
  }
};

const quizzesSlice = createSlice(options);

export const { addQuiz } = quizzesSlice.actions;

export const updateTopics = (quiz) => {
  return (dispatch) => {
    dispatch(addQuiz(quiz));
    dispatch(addQuizForTopic(quiz));
  }
};
export default quizzesSlice.reducer;
export const allQuizzes = state => state.quizzes.quizzes;
