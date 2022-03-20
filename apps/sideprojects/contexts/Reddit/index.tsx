import React, { createContext } from "react";
import { useRedditPosts } from "./useRedditPosts";

/**
 * There are tons of stuff but these are the essential ones imho
 */
export interface Post {
  domain: string;
  score: number;
  title: string;
  permalink: string;
  url: string;
  selftext: string;
  created_utc: string;
}

const defaultValue = {
  worldnews: [] as Post[],
  news: [] as Post[],
};

export const RedditContext = createContext(defaultValue);

interface ProviderProps {
  children: React.ReactNode;
}

export function RedditProvider({ children }: ProviderProps) {
  const worldnews = useRedditPosts("/r/worldnews/hot");
  const news = useRedditPosts("/r/news/hot");
  return <RedditContext.Provider value={{ worldnews, news }}>{children}</RedditContext.Provider>;
}
