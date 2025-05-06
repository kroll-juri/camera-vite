import { fetchCameraListData, fetchCurrentCamera, fetchSimilarListData } from '@store/api-action/api-action';
import { Camera, CameraInitialState } from '@slice/camera/types/types';

import { Namespace } from '@app/store/namespace/namespace';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CameraInitialState = {
  camera: [],
  isCameraLoading: false,
  currentCamera: null,
  isCurrentCameraLoading: false,
  actualCamera: [],
  similarList: [],
  isSimilarListLoading: false,
};

const cameraSlice = createSlice({
  name: Namespace.Camera,
  initialState,
  reducers: {
    setActualCamera(state: CameraInitialState, action: PayloadAction<Camera[]>) {
      state.actualCamera = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCameraListData.pending, (state) => {
        state.isCameraLoading = true;
      })
      .addCase(fetchCameraListData.fulfilled, (state, action) => {
        state.camera = action.payload;
        state.actualCamera = action.payload;
        state.isCameraLoading = false;
      })
      .addCase(fetchCameraListData.rejected, (state) => {
        state.isCameraLoading = false;
      })
      .addCase(fetchCurrentCamera.pending, (state) => {
        state.isCurrentCameraLoading = true;
      })
      .addCase(fetchCurrentCamera.fulfilled, (state, action) => {
        state.currentCamera = action.payload;
        state.isCurrentCameraLoading = false;
      })
      .addCase(fetchCurrentCamera.rejected, (state) => {
        state.isCurrentCameraLoading = false;
      })
      .addCase(fetchSimilarListData.pending, (state) => {
        state.isSimilarListLoading = true;
      })
      .addCase(fetchSimilarListData.fulfilled, (state, action) => {
        state.similarList = action.payload;
        state.isSimilarListLoading = false;
      })
      .addCase(fetchSimilarListData.rejected, (state) => {
        state.isSimilarListLoading = false;
      });
  },
});

export { cameraSlice };
export const { setActualCamera } = cameraSlice.actions;
