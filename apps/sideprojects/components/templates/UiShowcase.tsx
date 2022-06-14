import React, { useState } from "react";
import styled from "styled-components";
import { Text, Password, DatetimeLocal, Checkbox } from "@andyfx/ui/atoms/input";
import { GridItem, Paper, AutoComplete } from "@andyfx/ui/atoms";
import { Table, Accordion } from "@andyfx/ui/molecules";

const people: Record<string, string>[] = [
  { name: "Anders8 Gustafsson", title: "Some title1", email: "Some1@email.com", role: "Some role4" },
  { name: "Anders1 Gustafsson", title: "Some title6", email: "Some2@email.com", role: "Some role7" },
  { name: "Anders6 Gustafsson", title: "Some title7", email: "Some4@email.com", role: "Some role1" },
  { name: "Anders7 Gustafsson", title: "Some title2", email: "Some9@email.com", role: "Some role3" },
  { name: "Anders3 Gustafsson", title: "Some title3", email: "Some3@email.com", role: "Some role2" },
];

type Props = {
  className?: string;
};

const suggestions = ["hajsan", "hajsan2", "hajsan3", "hajsa4", "haj", "hej", "på", "dig"];

export default function UiShowcase({ className }: Props) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState(new Date());
  const [checked, setChecked] = useState(false);
  const [searchval, setSearchval] = useState("");

  return (
    <Container className={className}>
      <GridItem>
        <h2>Input</h2>
        <Text name="text" label="Text" value={text} onChange={(e) => setText(e.target.value)} />
        <Password name="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <DatetimeLocal date={date} label="Date" onChange={(d) => setDate(d)} />
        <Checkbox label="Checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        <Checkbox label="Checkbox" checked={checked} onChange={() => setChecked(!checked)} />

        <AutoComplete
          suggestions={suggestions.filter((s) => s.includes(searchval))}
          value={searchval}
          onChange={(str) => setSearchval(str)}
          onSelect={(str) => {
            setSearchval(str);
            console.log("selected", str);
          }}
        />
      </GridItem>
      <GridItem>
        <h2>Accordion</h2>
        <Paper>
          <Accordion summary="This is a summary">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quidem ut quod molestiae? Voluptatum,
              reprehenderit, repellat quae velit asperiores officiis praesentium libero esse quidem, corrupti soluta
              exercitationem laboriosam eum doloribus!
            </p>
          </Accordion>
          <Accordion summary="This is a summary 2">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quidem ut quod molestiae? Voluptatum,
              reprehenderit, repellat quae velit asperiores officiis praesentium libero esse quidem, corrupti soluta
              exercitationem laboriosam eum doloribus!
            </p>
          </Accordion>
        </Paper>
      </GridItem>
      <GridItem>
        <h2>Table</h2>
        <Table rows={people} keys={["name", "title", "email", "role"]} headings={["Name", "Title", "Email", "Role"]} />
      </GridItem>
      <GridItem>
        <h2>a</h2>
      </GridItem>
      <GridItem>
        <h2>b</h2>
      </GridItem>
      <GridItem>
        <h2>c</h2>
      </GridItem>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;
