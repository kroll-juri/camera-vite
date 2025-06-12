import { fetchReviewData } from '@store/api-action/api-action';
import { Namespace } from '@namespace/namespace';
import { ReviewInitialState } from '@slice/review/types/types';

import { createSlice } from '@reduxjs/toolkit';

const initialState: ReviewInitialState = {
  review: [],
  isReviewLoading: false,
};

const reviewSlice = createSlice({
  name: Namespace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewData.pending, (state) => {
        state.isReviewLoading = true;
      })
      .addCase(fetchReviewData.fulfilled, (state, action) => {
        state.isReviewLoading = false;
        state.review = action.payload;
      })
      .addCase(fetchReviewData.rejected, (state) => {
        state.isReviewLoading = false;
      });
  },
});

export { reviewSlice };
