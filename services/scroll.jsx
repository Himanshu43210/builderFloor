import { createSlice } from "@reduxjs/toolkit";
let propertyFilter = {
  accommodation: [],
  categories: [],
  cities: [],
  facing: [],
  floors: [],
  locations: [],
  positions: [],
  possession: [],
  priceRange: [10000000, 20000000],
  sizeRange: [180,360],
  sort: null,
  pageNumber: 1,
};
const threeSlice = createSlice({
  name: "Drag",
  initialState: {
    filters: propertyFilter,
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setFilters } = threeSlice.actions;

export default threeSlice.reducer;
