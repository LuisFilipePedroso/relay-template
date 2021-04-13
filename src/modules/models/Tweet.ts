export default interface Tweet {
  id: number;
  author: string;
  message: string;
  likes: number | null;
  hasLiked: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
}
