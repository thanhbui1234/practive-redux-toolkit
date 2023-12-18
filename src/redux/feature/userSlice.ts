import { IPUser } from "../../common/user";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";
import { getAll, createUser } from "../../service/product";
const initialState: {
  listUser: IPUser[];
  isCreateSuccess: boolean;
} = {
  listUser: [],
  isCreateSuccess: false,
};

export const fetchUsers = createAsyncThunk("users/fetchAllUsers", async () => {
  const rest = await getAll();
  return rest as IPUser[];
});
export const createUserT = createAsyncThunk(
  "users/create",
  async (data: IPUser, thunkAPI) => {
    const rest = await createUser(data);
    if (rest) thunkAPI.dispatch(fetchUsers());
  }
);
export const fetchUserByIdT = createAsyncThunk(
  "users/fetchUserById",
  async () => {}
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.listUser = action.payload;
    }),
      builder.addCase(createUserT.fulfilled, (state, action) => {
        state.isCreateSuccess = true;
      });
  },
});

export default userSlice.reducer;
