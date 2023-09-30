import { ToolbarIcon } from "../styled";
import { IconProps } from "../types";

export default function Italic(props: IconProps) {
  const { color, size = "large" } = props;
  return (
    <ToolbarIcon
      data-testid={props["data-testid"]}
      size={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-7.5 -7 24 24"
      fill={color}
    >
      <path d="M2.273 8l1.95-6H3a1 1 0 1 1 0-2h5a1 1 0 1 1 0 2H6.326l-1.95 6H6a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h1.273z" />
    </ToolbarIcon>
  );
}
