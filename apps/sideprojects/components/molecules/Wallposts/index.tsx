import React from "react";
import styled from "styled-components";
import Write from "./Post/Write";
import Post from "./Post";
import { useProfilePosts } from "hooks/useProfilePosts";
import Reply from "./Reply";
import WriteReply from "./Reply/Write";

type Props = {
  className?: string;
  userId: string;
};

export default function Wallposts({ userId, className }: Props) {
  const { posts, mutate } = useProfilePosts(userId);
  console.log("posts:", posts);

  const handleUpdate = () => mutate();

  return (
    <Container className={className}>
      <p>Write something on their page!</p>
      <Write recieverId={userId} onSend={handleUpdate} />
      {posts?.map((post) => (
        <div key={post._id}>
          <Post post={post} onDelete={handleUpdate} onEdit={handleUpdate} />
          <WriteReply recieverId={post._id} onSend={handleUpdate} />
          {post.replies.map((reply) => (
            <Reply key={reply._id} reply={reply} onEdit={handleUpdate} onDelete={handleUpdate} />
          ))}
        </div>
      ))}
    </Container>
  );
  /*
  const onSend = () => mutate();
  const onDelete = () => mutate();

  return (
    <Container className={className}>
      <p>Write something on their page!</p>
      <WritePost recieverId={userId} onSend={onSend} />
      {postIds?.map((id) => (
        <Post key={id} id={id} onDelete={onDelete} />
      ))}
    </Container>
  );
  */
}

const Container = styled.div``;
