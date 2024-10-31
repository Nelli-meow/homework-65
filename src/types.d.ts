export interface IPage {
  category: string;
  title: string,
  content: string,
}

export interface IPages {
  id: string;
  category: string;
  title: string,
  content: string,
}


export interface IPageApi {
  [id: string]: IPage;
}