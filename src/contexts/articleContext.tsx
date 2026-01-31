"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { fetchDataPagination } from "@/lib/fetchDataPagination";
import type { WebResponse } from "@/app/models/web.model";
import type { PaginationResult } from "@/pagination/pagination-result.interface";
import type { ArticleTypeWithCategory } from "@/types/ArticleTypeWithCategory";

/**
 * Context state contract for articles
 */
type ArticleContextType = {
  response: WebResponse<PaginationResult<ArticleTypeWithCategory>> | null;
  articles: WebResponse<PaginationResult<ArticleTypeWithCategory>> | null;
  loading: boolean;
  error: string | null;
  refetchArticles: () => Promise<void>;
};

/**
 * Article context
 */
const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

/**
 * ArticleProvider
 */
export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [response, setResponse] = useState<WebResponse<
    PaginationResult<ArticleTypeWithCategory>
  > | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await fetchDataPagination<
        WebResponse<PaginationResult<ArticleTypeWithCategory>>
      >("/api/article");

      if (res.statusCode !== 200 || !res.data) {
        throw new Error(res.error ?? "Failed to fetch articles");
      }

      setResponse(res);
      setError(null);
    } catch (err) {
      console.error("[ArticleContext]", err);
      setError("Error fetching articles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <ArticleContext.Provider
      value={{
        response,
        articles: response,
        loading,
        error,
        refetchArticles: fetchArticles,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

/**
 * useArticle hook
 */
export const useArticle = () => {
  const context = useContext(ArticleContext);

  if (!context) {
    throw new Error("useArticle must be used within an ArticleProvider");
  }

  return context;
};
