import { configureStore } from "@reduxjs/toolkit";

import getMovieReducer from "./movie";

const store = configureStore({
  reducer: { getMovie: getMovieReducer },
});

export default store;
