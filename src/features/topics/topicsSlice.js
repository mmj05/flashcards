import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      return {
        ...state,
        topics: {
          ...state.topics,
          [action.payload.id]: {
            id: action.payload.id,
            name: action.payload.name,
            icon: action.payload.icon,
            quizIds: []
          }
        }
      };
    },
    addQuizForTopic: (state, action) => {
      /* for (const id in state.topics) {
        if (id.id === action.payload.topicId) {
          id.quizIds.push(action.payload.id);
        }
      } */
      return {
        ...state,
        topics: {
          ...state.topics,
          [action.payload.topicId]: {
            ...state.topics[action.payload.topicId],
            quizIds: [...state.topics[action.payload.topicId].quizIds, action.payload.id]
          }
        }
      };
    }
  }
};

const topicsSlice = createSlice(options);

export const allTopics = state => state.topics.topics;
export default topicsSlice.reducer;
export const { addTopic, addQuizForTopic } =  topicsSlice.actions;