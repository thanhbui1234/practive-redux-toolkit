import { IPUser } from "../../common/user";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";
import { getAll } from "../../service/product";
const initialState: {
  listUser: IPUser[];
} = {
  listUser: [],
  // name: "",
  // description: "",
  // address: { xa: "", xom: "", huyen: "", quoctich: "" },
  // code: 100,
};

export const fetchUsers = createAsyncThunk("users/fetchAllUsers", async () => {
  const rest = await getAll();
  return rest as IPUser[];
});
export const userSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.listUser = action.payload;
    });
  },
});

export default userSlice.reducer;
