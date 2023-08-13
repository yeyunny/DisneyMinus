import { createSlice } from "@reduxjs/toolkit";
import { MovieInfo } from "../main/Main";

const initialMovie: MovieInfo[] = [];

const movieSlice = createSlice({
  name: "movie",
  initialState: initialMovie,
  reducers: {
    getMovies(state, action) {
      return (state = [...state, action.payload]);
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
