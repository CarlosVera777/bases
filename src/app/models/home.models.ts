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
}
