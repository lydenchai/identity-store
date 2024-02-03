import { MongoObject } from './mongo-object';

export interface Product extends MongoObject {
  id?: number | string | any;
  title?: string;
  price?: number;
  category?: string;
  description?: string;
  image?: string;
  rating?: Rating;
}

interface Rating {
  count?: number;
  rate?: number;
}
