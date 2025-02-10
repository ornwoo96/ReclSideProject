import { createSlice } from "@reduxjs/toolkit";

interface GlobalAlertState {
  showAlert: boolean;
  alertMessage: string;
}

const initialState: GlobalAlertState = {
  showAlert: false,
  alertMessage: "",
};

const globalAlertSlice = createSlice({
  name: "globalAlert",
  initialState,
  reducers: {
    showGlobalAlert: (state, action) => {
      state.showAlert = true;
      state.alertMessage = action.payload; // 알림 메시지 설정
    },
    hideGlobalAlert: (state) => {
      state.showAlert = false;
      state.alertMessage = "";
    },
  },
});

export const { showGlobalAlert, hideGlobalAlert } = globalAlertSlice.actions;
export default globalAlertSlice.reducer;