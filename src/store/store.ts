import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/auth/authSlice";
import announcementsReducer from "./announcement/announcement.slice";
import quizReducer from "./quiz/quiz.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    announcements: announcementsReducer,
    quiz: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
