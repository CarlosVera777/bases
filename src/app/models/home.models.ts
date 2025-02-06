export namespace ModelsHome {
  export interface IArticulo {
      title: string;
      description: string;
      image: {
        url: string;
        desc: string;
      }
      id?: string;
  }

  export interface IArticle {
    title: string;
    body: string;
    userId: number;
    id?: number;
  }
}
