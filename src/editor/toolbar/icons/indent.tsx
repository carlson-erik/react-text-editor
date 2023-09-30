import { ToolbarIcon } from "../styled";
import { IconProps } from "../types";

export default function Indent(props: IconProps) {
  const { color, size = "large" } = props;
  return (
    <ToolbarIcon
      data-testid={props["data-testid"]}
      size={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-4.5 -7 24 24"
      fill={color}
    >
      <path d="M2 0h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 8h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm6-4h6a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM4.44 5.857L2.382 7.091a1 1 0 0 1-1.515-.857V3.766a1 1 0 0 1 1.515-.857l2.056 1.234a1 1 0 0 1 0 1.714z" />
    </ToolbarIcon>
  );
}
