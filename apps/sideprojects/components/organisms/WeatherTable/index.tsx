import { useContext } from "react";
import { dateformatsplit, densitydifference } from "./utils";
import styled from "styled-components";
import { WeatherContext } from "contexts/Weather";
import { roundnstr } from "./utils";
import WindarrowIcon from "./windarrow.svg";

interface Props {
  className?: string;
}

export default function WeatherTable({ className }: Props) {
  const { weatherdata } = useContext(WeatherContext);

  return (
    <Table className={className}>
      <Caption>weather forecast for {weatherdata.city.name}</Caption>

      <thead>
        <TableRowHeader>
          <Th numeric>Date</Th>
          <Th numeric>Time</Th>

          <Th data-tooltip="Stormy weather ahead!" numeric>
            Waterneed
          </Th>

          <Th numeric>Temperature</Th>
          <Th numeric>Humidity</Th>
          <Th numeric>Cloudiness</Th>
          <Th numeric>Rain</Th>
          <Th numeric>Wind</Th>
        </TableRowHeader>
      </thead>
      <tbody>
        {weatherdata.list.map((w) => {
          const waterneed = densitydifference(w.main.temp, w.main.humidity / 100);
          const [y, m, d, hh, mm] = dateformatsplit(new Date(w.dt_txt));
          return (
            <TableRow
              key={w.dt}
              /*
              onMouseEnter={() => {
                console.log(w);
                //setHoveredDatapoint(w);
              }}
              */
            >
              <Td numeric>{`${y}-${m}-${d}`}</Td>
              <Td numeric>{`${hh}:${mm}`}</Td>
              <Td numeric>{roundnstr(waterneed, 2)}</Td>
              <Td numeric>{roundnstr(w.main.temp, 1)}°C</Td>
              <Td numeric>{w.main.humidity}%</Td>
              <Td numeric>{w.clouds.all}%</Td>
              <Td numeric>{roundnstr(w.rain ? w.rain["3h"] : 0, 1)}</Td>
              <Td numeric>
                <TdItem>
                  {`${roundnstr(w.wind.speed, 1)}`} <WindArrow rot={w.wind.deg + 90} />
                </TdItem>
              </Td>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
}

const TdItem = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1px;
`;

interface WindArrowProps {
  rot: number;
}

const WindArrow = styled(WindarrowIcon)<WindArrowProps>`
  > path {
    fill: ${(props) => props.theme.color.text.primary};
    transform-origin: center center;
    transform: rotate(${(props) => props.rot}deg);
  }
`;

const Table = styled.table`
  display: block;
  border-collapse: collapse;
  overflow-x: auto;
  white-space: nowrap;
  max-width: 90vw;
`;

const Caption = styled.caption`
  caption-side: top;
  text-align: left;
  color: ${(props) => props.theme.color.text.secondary};
  font-size: ${(props) => props.theme.font.size.medium};
  margin: 0 0 4px 0;
`;

const TableRowHeader = styled.tr``;
const TableRow = styled.tr`
  cursor: default;
  font-family: ${(props) => props.theme.font.family.monospace};
  color: ${(props) => props.theme.color.text.secondary};
  border-top: 1px dotted ${(props) => props.theme.color.text.secondary};
  &:hover {
    background-color: ${(props) => props.theme.color.accent};
    color: ${(props) => props.theme.color.text.primary};
    opacity: 1;
  }
`;

interface ThProps {
  numeric?: boolean;
}

const Th = styled.th<ThProps>`
  position: relative;
  padding: 0 0.5rem 0 1rem;
  text-align: ${(props) => (props.numeric ? "right" : "left")};
`;

interface TdProps {
  numeric?: boolean;
}

const Td = styled.td<TdProps>`
  padding: 0 0.5rem 0 1rem;
  text-align: ${(props) => (props.numeric ? "right" : "left")};
`;
