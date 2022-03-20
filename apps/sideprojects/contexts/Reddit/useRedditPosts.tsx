import { useEffect, useState } from "react";
import { Post } from "./index";

const BASEURL = process.env.NEXT_PUBLIC_URL_REDDIT_API;

export function useRedditPosts(url: string) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`${BASEURL}${url}`)
      .then((res) => res.json())
      .then((json) => {
        if (json?.kind === "Listing") {
          setPosts(json.data.children.map((child: { data: Post }) => child.data));
        }
      })
      .catch((err) => {
        console.log(url, err);
        setPosts([]);
      });
  }, [url]);

  return posts;
}
