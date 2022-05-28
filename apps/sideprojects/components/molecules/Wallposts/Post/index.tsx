import React, { useState } from "react";
import styled from "styled-components";
import { dateformatNumber } from "lib/date";
import { useUser } from "hooks/useUser";
import { useMyUser } from "hooks/useMyUser";
import { Link } from "ui/atoms";
import Body from "./Body";
import { EditIcon, DeleteIcon } from "ui/icons";
import Edit from "./Edit";
import type { PostPopulated } from "api/src/models/post";
import api from "lib/api";

type Props = {
  post: PostPopulated;
  className?: string;
  onDelete?: () => void;
  onEdit?: () => void;
};

export default function Post({ onEdit, onDelete, post, className }: Props) {
  const { myUser } = useMyUser();
  const { user } = useUser(post.creatorId);
  const [isEditing, setIsEditing] = useState(false);

  const onSave = () => {
    setIsEditing(false);
    onEdit && onEdit();
  };

  const handleDelete = async () => {
    try {
      await api.remove(`/post/${post._id}`);
      onDelete && onDelete();
    } catch (err) {
      console.log(err);
    }
  };

  if (!post) {
    return null;
  }

  return (
    <Container className={className} isEditing={isEditing}>
      <PostHeading>
        <HeadingLeft>
          <NameLink href={`/profile/${post.creatorId}`}>{user?.name}</NameLink>
          <Time>
            {post.createdAt === post.modifiedAt
              ? `${dateformatNumber(post.createdAt)}`
              : `edited: ${dateformatNumber(post.modifiedAt)}`}
          </Time>
        </HeadingLeft>
        {user?._id === myUser?._id && (
          <HeadingRight>
            <button aria-label="edit" onClick={() => setIsEditing((prev) => !prev)}>
              <StyledEditIcon />
            </button>
            <button aria-label="delete" onClick={handleDelete}>
              <StyledDeleteIcon />
            </button>
          </HeadingRight>
        )}
      </PostHeading>
      {isEditing && user ? <Edit id={post._id} initialText={post.text} onSave={onSave} /> : <Body text={post.text} />}
    </Container>
  );
}

const StyledEditIcon = styled(EditIcon)`
  width: 32px;
  height: 32px;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  width: 32px;
  height: 32px;
`;

const HeadingLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HeadingRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PostHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem 0 0.5rem;
`;

const NameLink = styled(Link)`
  color: ${(props) => props.theme.color.text.secondary};
  font-weight: ${(props) => props.theme.font.weight.regular};
`;

const Time = styled.div`
  color: ${(props) => props.theme.color.text.secondary};
  font-size: ${(props) => props.theme.font.size.xsmall};
`;

interface ContainerProps {
  readonly isEditing: boolean;
}

const Container = styled.div<ContainerProps>`
  margin: 0.5rem 0 0.5rem 0;
  //outline: ${(props) => (props.isEditing ? `1px solid ${props.theme.color.primary}` : "none")};
`;
