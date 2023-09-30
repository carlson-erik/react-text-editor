import { ToolbarIcon } from "../styled";
import { IconProps } from "../types";

export default function Underline(props: IconProps) {
  const { color, size = "large" } = props;
  return (
    <ToolbarIcon
      data-testid={props["data-testid"]}
      size={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-7 -6.5 24 24"
      fill={color}
    >
      <path d="M1.5 10h7a.5.5 0 1 1 0 1h-7a.5.5 0 1 1 0-1zM7 2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2v3a4 4 0 1 1-8 0V2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2v3a2 2 0 1 0 4 0V2z" />
    </ToolbarIcon>
  );
}
