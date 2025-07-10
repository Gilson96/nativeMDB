import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  user: null | {
    uid: string | undefined;
    email: string | undefined | null;
    token: string | undefined; 
  };
};

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthState["user"]>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
