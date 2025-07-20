import { toast } from 'react-toastify';

import { Camera } from '@slice/camera/types/types';
import { Promo } from '@slice/promo/types/types';
import { Review } from '@slice/review/types/types';

import { createAPI } from '@service/api/api';
import { apiRouteConfig } from '@api/api-routes';

import { ReviewFormData } from '@product-page/types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { OrderType, SimilarResponse } from '@shared-types/types';

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

const fetchReviewData = createAsyncThunk<Review[], string>(
  'review/fetchReviewData',
  async (cameraId: string): Promise<Review[]> => {
    try {
      const { data } = await api.get<Review[]>(`${apiRouteConfig.ReviewsApiRoute}/?cameraId=${cameraId}`);
      return data;
    } catch (error) {
      toast.warn('Error fetching review data');
    }

    return [];
  },
);



const fetchSimilarListData = createAsyncThunk<Camera[], string>(
  'similar/fetchSimilarListData',
  async (cameraId: string): Promise<Camera[]> => {
    try {
      const { data } = await api.get<SimilarResponse[]>(
        `${apiRouteConfig.SimilarApiRoute}?cameraId=${cameraId}`
      );

      const match = data.find((entry) => String(entry.cameraId) === cameraId);
      return match?.items || [];
    } catch (error) {
      toast.warn('Ошибка при загрузке похожих камер');
      return [];
    }
  }
);

const postOrderAction = createAsyncThunk<
  void,
  OrderType,
  {
    rejectValue: string;
  }
>('order/postOrder', async (requestData: OrderType, { rejectWithValue }) => {
  try {
    await api.post(apiRouteConfig.OrdersApiRoute, requestData);
    console.log(requestData);
  } catch (error) {
    return rejectWithValue('Не удалось оформить заказ. Попробуйте снова.');
  }
});

const fetchPromoListData = createAsyncThunk<Promo[], undefined>(
  'promo/fetchPromoListData',
  async (): Promise<Promo[]> => {
    try {
      const { data } = await api.get<Promo[]>(apiRouteConfig.PromoApiRoute);
      return data;
    } catch (error) {
      toast.warn('Error fetching promo');
    }
    return [];
  },
);

const postReviewAction = createAsyncThunk<
  void,
  ReviewFormData,
  {
    rejectValue: string;
  }
>('review/postReview', async (requestData: ReviewFormData, { rejectWithValue }) => {
  try {
    await api.post(apiRouteConfig.ReviewsApiRoute, requestData);
  } catch (error) {
    return rejectWithValue('Не удалось отправить отзыв. Попробуйте снова.');
  }
});

export {
  fetchCameraListData,
  fetchCurrentCamera,
  fetchPromoListData,
  fetchReviewData,
  fetchSimilarListData,
  postOrderAction,
  postReviewAction,
};
