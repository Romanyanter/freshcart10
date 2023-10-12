export interface Pokedex {
  results:  number;
  metadata: Metadata;
  data:     catagroue[];
}

export interface catagroue {
  _id:       string;
  name:      string;
  slug:      string;
  image:     string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Metadata {
  currentPage:   number;
  numberOfPages: number;
  limit:         number;
}

