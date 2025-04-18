"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import CardProps from "@/cardProps";

type Posts = {
  data: CardProps[] | null | undefined;
  message: string;
  status: number;
  success: boolean;
};

type PostContextType = {
  posts: Posts;
  setPosts: (posts: Posts) => void;
  loading: boolean;
  error: string | null;
  refetchPosts: () => void;
};

const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Posts>({
    status: 404,
    data: [],
    message: "",
    success: false,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/allPost");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Posts = await response.json();
      setPosts(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Error fetching posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        loading,
        error,
        refetchPosts: fetchPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost harus dipakai di dalam PostProvider");
  }
  return context;
};
