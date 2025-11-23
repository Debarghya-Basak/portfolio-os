const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  windows: [],
};

const WindowsSlice = createSlice({
  name: "windows",
  initialState,
  reducers: {
    openWindow: (state, action) => {
      const app = action.payload;

      const exists = state.windows.find((w) => w.appId === app.id);
      if (!exists) {
        state.windows.push({
          id: Date.now(),
          appId: app.id,
          title: app.name,
          x: Math.random() * 100 + (10 + Math.random() * 100),
          y: Math.random() * 100 + (10 + Math.random() * 100),
          width: app.minWidth,
          height: app.minHeight,
          minWidth: app.minWidth,
          minHeight: app.minHeight,
          app: app.app,
        });
      }
    },

    bringToFront: (state, action) => {
      const id = action.payload;
      const index = state.windows.findIndex((w) => w.id === id);
      if (index === -1) return;

      const [win] = state.windows.splice(index, 1);
      state.windows.push(win);
    },

    resizeWindow: (state, action) => {
      const { id, width, height } = action.payload;
      const win = state.windows.find((w) => w.id === id);
      if (!win) return;

      win.width = Math.max(width, 200);
      win.height = Math.max(height, 150);
    },

    closeWindow: (state, action) => {
      state.windows = state.windows.filter((w) => w.id !== action.payload);
    },
  },
});

export const { openWindow, closeWindow, bringToFront, resizeWindow } =
  WindowsSlice.actions;
export default WindowsSlice.reducer;
