import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { initialAnnouncementsState } from "./announcement.state";

export const fetchAnnouncements = createAsyncThunk(
  "announcements/fetchAnnouncements",
  async () => {
    try {
      const response = await axios.get(
        "https://nest-quiz-api.onrender.com/announcements"
      );
      return response.data.announcements;
    } catch (error) {
      throw error;
    }
  }
);

const announcementsSlice = createSlice({
  name: "announcements",
  initialState: initialAnnouncementsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAnnouncements.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAnnouncements.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.announcements = action.payload;
    });
    builder.addCase(fetchAnnouncements.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "An error occurred.";
    });
  },
});

export default announcementsSlice.reducer;
