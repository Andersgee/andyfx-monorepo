import Svg from "./andyfx.svg";

type Props = {
  className?: string;
};

export default function Andyfx({ className }: Props) {
  return <Svg className={className} />;
}
