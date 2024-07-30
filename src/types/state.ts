export type HomeScreen = {
  isActive: boolean;
  title: string;
  body: string;
  id: number;
  itemData: [];
  setPost: [
    {
      id: number;
      title: string;
      body: string;
    },
  ];
};
