import { Namespace } from '@namespace/namespace';

import { State } from '@shared-types/types';

export const getReviewList = (state: Pick<State, Namespace.Review>) => state[Namespace.Review].review;

export const getReviewLoadingStatus = (state: Pick<State, Namespace.Review>) => state[Namespace.Review].isReviewLoading;
