import SortableColumn from "./SortableColumn";
import { useRouter } from "next/router";
import styled from "styled-components";

type Props = {
  /** A list of objects */
  rows: Record<string, string>[];
  /** Which keys in each object to show */
  keys: string[];
  /** Defaults to what `key` is for the column */
  headings?: string[];
  className?: string;
  /** default is just "sort" */
  sortparam?: string;
};

/**
 * Table with sortable columns. Sorting state is handled by url query parameters (for sharing sorted table).
 *
 * If multiple tables: Make sure to pass a unique `sortparam` to each.
 */
export default function Table({ rows, keys, headings, className, sortparam = "sort" }: Props) {
  const router = useRouter();
  const sort = router.query[sortparam];
  const [sortProp, desc] = Array.isArray(sort) ? sort[0]?.split(":") ?? [] : sort?.split(":") ?? [];

  let sortedRows = rows.slice().sort((a, b) => {
    return desc ? b[sortProp]?.localeCompare(a[sortProp]) : a[sortProp]?.localeCompare(b[sortProp]);
  });

  return (
    <Container className={className}>
      <thead>
        <tr>
          {keys.map((key, i) => (
            <SortableColumn key={key} prop={key} sortparam={sortparam}>
              {headings ? headings[i] || key : key}
            </SortableColumn>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, i) => {
          return (
            <tr key={i}>
              {keys.map((key, j) => (
                <td key={j}>{row[key]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Container>
  );
}

const Container = styled.table`
  background-color: ${(props) => props.theme.color.paper};
  box-shadow: ${(props) => props.theme.shadow[1]};
  border-collapse: collapse;
  //border-spacing: 0;

  font-size: ${(props) => props.theme.font.size.small};

  white-space: nowrap;

  td,
  th {
    border-bottom: 1px solid ${(props) => props.theme.color.text.disabled};
    padding: 0.75rem 1rem 0.75rem 1rem;
    color: ${(props) => props.theme.color.text.primary};
  }

  td:first-child,
  th:first-child {
    padding-left: 1.5rem;
  }

  thead {
    button {
      color: ${(props) => props.theme.color.text.primary};
      font-weight: ${(props) => props.theme.font.weight.medium};
      font-size: ${(props) => props.theme.font.size.small};

      text-transform: none;
    }
    //background-color: ${(props) => props.theme.color.action.selected};
  }
`;
