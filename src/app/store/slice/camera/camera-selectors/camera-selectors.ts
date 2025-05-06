import { Namespace } from '@namespace/namespace';

import { State } from '@shared-types/types';

export const getCamerasList = (state: Pick<State, Namespace.Camera>) => state[Namespace.Camera].camera;

export const getCurrentCamera = (state: Pick<State, Namespace.Camera>) => state[Namespace.Camera].currentCamera;

export const getCameraLoadingStatus = (state: Pick<State, Namespace.Camera>) => state[Namespace.Camera].isCameraLoading;

export const getCurrentCameraLoadingStatus = (state: Pick<State, Namespace.Camera>) =>
  state[Namespace.Camera].isCurrentCameraLoading;
//
export const getActualCamera = (state: Pick<State, Namespace.Camera>) => state[Namespace.Camera].actualCamera;

export const getSimilarList = (state: Pick<State, Namespace.Camera>) => state[Namespace.Camera].similarList;
