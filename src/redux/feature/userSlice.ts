import { ThunkDispatch } from "redux-thunk";
import { IPUser } from "./../../common/user";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";
import {
  getAll,
  createUser,
  deleteUser,
  updateUser,
} from "../../service/product";
import { getUserByID } from "../../service/product";

const initialState: {
  user: IPUser;
  listUser: IPUser[];
  isCreateSuccess: boolean;
  isLoading: "idle" | "pending" | "succeeded" | "failed";
} = {
  user: {},
  listUser: [],
  isCreateSuccess: false,
  isLoading: "pending",
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
  async (id: number) => {
    const rest = await getUserByID(id);
    return rest as IPUser;
  }
);
export const deleteUserByIdT = createAsyncThunk(
  "users/delete",
  async (id: number, thunkAPI) => {
    const rest = await deleteUser(id);
    if (rest) thunkAPI.dispatch(fetchUsers());
  }
);

export const updateUserByIdT = createAsyncThunk(
  "users/update",
  async (data: IPUser, thunkApi) => {
    const rest = await updateUser(data);
    if (rest) thunkApi.dispatch(fetchUsers());
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = "pending";
    }),
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = "succeeded";
        state.listUser = action.payload;
      }),
      builder.addCase(fetchUserByIdT.pending, (state) => {
        state.isLoading = "pending";
      }),
      builder.addCase(fetchUserByIdT.fulfilled, (state, action) => {
        state.isLoading = "pending";
        state.user = action.payload;
      }),
      builder.addCase(createUserT.fulfilled, (state) => {
        state.isCreateSuccess = true;
        state.isLoading = "succeeded";
      }),
      builder.addCase(deleteUserByIdT.pending, (state) => {
        state.isLoading = "pending";
      }),
      builder.addCase(deleteUserByIdT.fulfilled, (state) => {
        state.isLoading = "succeeded";
      }),
      builder.addCase(updateUserByIdT.fulfilled, (state) => {
        state.isLoading = "succeeded";
      }),
      builder.addCase(updateUserByIdT.pending, (state) => {
        state.isLoading = "pending";
      });
  },
});

export default userSlice.reducer;
