import Svg from "./andyfxAnimated.svg";

type Props = {
  className?: string;
};

export default function AndyfxAnimated({ className }: Props) {
  return <Svg className={className} />;
}
