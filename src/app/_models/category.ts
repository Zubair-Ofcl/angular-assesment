import { BaseModel } from './index';

export interface Category extends BaseModel {
  name: string;
  is_global?: boolean;
}
