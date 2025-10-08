interface PostProps {
  id: string;
  title: string;
  content: string;
}

export interface UseUserStoreProps {
  name: string;
  avatar: string;
  posts: PostProps[];
}
