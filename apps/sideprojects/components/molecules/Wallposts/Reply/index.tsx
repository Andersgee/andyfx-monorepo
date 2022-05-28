import React, { useState } from "react";
import styled from "styled-components";
import type { Reply } from "api/src/models/reply";
import { DeleteIcon, EditIcon } from "ui/icons";
import { useUser } from "hooks/useUser";
import { useMyUser } from "hooks/useMyUser";
import { Link } from "ui/atoms";
import { dateformatNumber } from "lib/date";
import Edit from "./Edit";
import api from "lib/api";
import Body from "./Body";

type Props = {
  className?: string;
  reply: Reply;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function Reply({ onEdit, onDelete, reply, className }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const { myUser } = useMyUser();
  const { user } = useUser(reply.creatorId);

  const handleSave = () => {
    setIsEditing(false);
    onEdit && onEdit();
  };

  const handleDelete = async () => {
    try {
      await api.remove(`/reply/${reply._id}`);
      onDelete && onDelete();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className={className}>
      <PostHeading>
        <HeadingLeft>
          <NameLink href={`/profile/${reply.creatorId}`}>{user?.name}</NameLink>
          <Time>
            {reply.createdAt === reply.modifiedAt
              ? `${dateformatNumber(reply.createdAt)}`
              : `edited: ${dateformatNumber(reply.modifiedAt)}`}
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

      {isEditing ? (
        <Edit id={reply._id} initialText={reply.text} onSave={handleSave} />
      ) : (
        <Body text={reply.text}></Body>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin: 0 0 1rem 2rem;
`;

const StyledEditIcon = styled(EditIcon)`
  width: 24px;
  height: 24px;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  width: 24px;
  height: 24px;
`;

const HeadingLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 1rem;
`;

const HeadingRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PostHeading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.5rem 0 0rem;
`;

const NameLink = styled(Link)`
  color: ${(props) => props.theme.color.text.secondary};
  font-weight: ${(props) => props.theme.font.weight.regular};
`;

const Time = styled.div`
  color: ${(props) => props.theme.color.text.secondary};
  font-size: ${(props) => props.theme.font.size.xsmall};
`;
