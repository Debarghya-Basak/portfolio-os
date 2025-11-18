const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  windows: [], // { id, appId, title }
};

const WindowsSlice = createSlice({
  name: "windows",
  initialState,
  reducers: {
    openWindow: (state, action) => {
      const app = action.payload;

      // If already open, bring to front later
      const exists = state.windows.find((w) => w.appId === app.id);
      if (!exists) {
        state.windows.push({
          id: Date.now(),
          appId: app.id,
          title: app.name,
        });
      }
    },

    closeWindow: (state, action) => {
      state.windows = state.windows.filter((w) => w.id !== action.payload);
    },
  },
});

export const { openWindow, closeWindow } = WindowsSlice.actions;
export default WindowsSlice.reducer;
