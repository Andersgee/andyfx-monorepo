import React, { useState } from "react";
import styled from "styled-components";
import api from "lib/api";
import { Button, Textarea } from "ui/atoms";
import Preview from "./Preview";

type Props = {
  id: string;
  initialText: string;
  onSave?: () => void;
  className?: string;
};

export default function Edit({ id, initialText, onSave, className }: Props) {
  const [value, setValue] = useState(initialText);
  const Nrows = initialText.split("\n").length;

  const handleSave = async () => {
    const post = { modifiedAt: Date.now(), text: value };
    try {
      await api.update(`/post/${id}`, post);
      onSave && onSave();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className={className}>
      <StyledTextarea
        autoFocus={true}
        autoComplete="off"
        spellCheck={false}
        value={value}
        rows={Nrows}
        className={className}
        onChange={(e) => setValue(e.target.value)}
        cursorPlacement={initialText.length}
      />
      <SaveButton onClick={handleSave}>save</SaveButton>
      {value && <Preview text={value} initialShow={false} />}
    </Container>
  );
}

const StyledTextarea = styled(Textarea)`
  //outline: 1px solid ${(props) => props.theme.color.primary};
`;

const Container = styled.div``;

const SaveButton = styled(Button)`
  margin: 0 0 0 0;
`;
