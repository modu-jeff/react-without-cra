import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isLoading: false,
};

const fetchCount = async () => {
  await new Promise((resolve) => {
    return setTimeout(() => {
      resolve(null);
    }, 1000);
  });
};

export const increaseAsync = createAsyncThunk(
  "counter/increase_async",
  async () => {
    await fetchCount();
  }
);

export const decreaseAsync = createAsyncThunk(
  "counter/decrease_async",
  async () => {
    await fetchCount();
  }
);

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => ({ ...state, value: state.value + 1 }),
    decrease: (state) => ({ ...state, value: state.value - 1 }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(increaseAsync.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(increaseAsync.fulfilled, (state) => ({
        ...state,
        value: state.value + 1,
        isLoading: false,
      }))
      .addCase(increaseAsync.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(decreaseAsync.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(decreaseAsync.fulfilled, (state) => ({
        ...state,
        value: state.value - 1,
        isLoading: false,
      }))
      .addCase(decreaseAsync.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { increase, decrease } = counter.actions;

export default counter.reducer;
