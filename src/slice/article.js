import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  isLoading: false,
  articles: [],
  articleDetail: null,
  error: null,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticlesStart: (state) => {
      state.isLoading = true;
    },

    getArticlesSuccess: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },

    getArticlesFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    getArticlesDetailStart: (state) => {
      state.isLoading = true;
    },

    getArticlesDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.articleDetail = action.payload;
    },

    getArticlesDetailFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getArticlesStart,
  getArticlesSuccess,
  getArticlesFailure,
  getArticlesDetailStart,
  getArticlesDetailSuccess,
  getArticlesDetailFailure,
} = articleSlice.actions;

export default articleSlice.reducer;
