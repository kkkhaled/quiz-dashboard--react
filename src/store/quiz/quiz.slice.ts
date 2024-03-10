import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { initialQuizState } from "./quiz.state";

export const fetchQuizes = createAsyncThunk("quizes/fetchQuizes", async () => {
  try {
    const response = await axios.get("https://nest-quiz-api.onrender.com/quiz");
    return response.data.quizes;
  } catch (error) {
    console.log(error);
  }
});

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialQuizState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuizes.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchQuizes.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.quizes = action.payload;
    });
    builder.addCase(fetchQuizes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "An error occurred.";
    });
  },
});

export default quizSlice.reducer;
