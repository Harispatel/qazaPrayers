import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  data: any;
}

const initialState: State = {
  data: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
