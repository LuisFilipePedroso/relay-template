export default interface Tweet {
  id: string | null;
  author: string;
  description: string;
  likes: number | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}
