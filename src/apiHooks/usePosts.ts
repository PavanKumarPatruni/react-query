import { useQuery } from "@tanstack/react-query";

export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getPosts = async (): Promise<TPost[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return await response.json();
};

const usePosts = () =>
  useQuery<TPost[], Error>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

export default usePosts;
