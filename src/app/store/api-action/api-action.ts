import { toast } from 'react-toastify';

import { Camera } from '@slice/camera/types/types';
import { Review } from '@slice/review/types/types';

import { createAPI } from '@service/api/api';
import { apiRouteConfig } from '@api/api-routes';

import { createAsyncThunk } from '@reduxjs/toolkit';

const api = createAPI();

const fetchCameraListData = createAsyncThunk<Camera[]>('camera/fetchCameraListData', async (): Promise<Camera[]> => {
  try {
    const { data } = await api.get<Camera[]>(apiRouteConfig.CamerasApiRoute);
    return data;
  } catch (error) {
    toast.warn('Error fetching cameras');
    throw error;
  }
});

const fetchCurrentCamera = createAsyncThunk<Camera | null, string>(
  'camera/fetchCurrentCamera',
  async (cameraId: string): Promise<Camera | null> => {
    try {
      const { data } = await api.get<Camera | null>(`${apiRouteConfig.CamerasApiRoute}/${cameraId}`);
      return data;
    } catch (error) {
      toast.warn('Error fetching cameras');
      return null;
    }
  },
);

export const fetchReviewData = createAsyncThunk<Review[], string>(
  'review/fetchReviewData',
  async (cameraId: string): Promise<Review[]> => {
    try {
      const { data } = await api.get<Review[]>(`${apiRouteConfig.CamerasApiRoute}/${cameraId}/reviews`);
      return data;
    } catch (error) {
      toast.warn('Error fetching review data');
    }

    return [];
  },
);

export const fetchSimilarListData = createAsyncThunk<Camera[], string>(
  'review/fetchReviewData',
  async (cameraId: string): Promise<Camera[]> => {
    try {
      const { data } = await api.get<Camera[]>(`${apiRouteConfig.CamerasApiRoute}/${cameraId}/similar`);
      return data;
    } catch (error) {
      toast.warn('Error fetching similar cameras data');
    }

    return [];
  },
);
//
// export const postOrderAction = createAsyncThunk<void, OrderType>(
//   'order/postOrder',
//   async (requestData: OrderType): Promise<void> => {
//     const {data} = await api.post<void>(apiRouteConfig.CamerasApiRoute, requestData);
//     try{
//       return data;
//     } catch(error) {
//       toast.warn('Error posting order');
//     }
//   }
// );

export { fetchCameraListData, fetchCurrentCamera };
