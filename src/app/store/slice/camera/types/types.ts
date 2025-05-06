export enum CameraType {
  Collections = 'Коллекционная',
  Momentum = 'Моментальная',
  Digital = 'Цифровая',
  Film = 'Плёночная',
}

export enum CamerasCategory {
  Video = 'Видеокамера',
  Photo = 'Фотоаппарат',
}

export enum CameraLevel {
  Start = 'Нулевой',
  Amateur = 'Любительский',
  Professional = 'Профессиональный',
}

export interface Camera {
  id: number;
  name: string;
  vendorCode: string;
  type: CameraType;
  category: CamerasCategory;
  description: string;
  level: CameraLevel;
  price: number;
  rating: number;
  reviewCount: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

export interface CameraInitialState {
  camera: Camera[];
  isCameraLoading: boolean;
  currentCamera: Camera | null;
  isCurrentCameraLoading: boolean;
  actualCamera: Camera[];
  similarList: Camera[];
  isSimilarListLoading: boolean;
}
