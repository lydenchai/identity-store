import { MongoObject } from './mongo-object';

export interface Product extends MongoObject {
  id?: number;
  title?: string;
  price?: number;
  category?: string;
  description?: string;
  image?: string;
}
