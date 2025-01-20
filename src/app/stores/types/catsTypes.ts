export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: any[];
  favourite: any;
}

export interface CatsState {
  cats: Cat[];
  favorites: Cat[];
}
