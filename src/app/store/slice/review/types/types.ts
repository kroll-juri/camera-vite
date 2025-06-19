export interface Review {
  id: string;
  createAt: string;
  cameraId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
}

export type ReviewInitialState = {
  review: Review[] | undefined;
  isReviewLoading: boolean;
};
