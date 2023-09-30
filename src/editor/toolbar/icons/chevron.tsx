import { ToolbarIcon } from "../styled";
import { IconProps } from "../types";

interface ChevronProps extends IconProps {
  direction: "up" | "down";
}

export default function Chevron(props: ChevronProps) {
  const { color, direction, size = "large" } = props;
  let viewBox, svgContent;

  if (direction === "up") {
    viewBox = "-5 -7.5 24 24";
    svgContent = (
      <path
        stroke="currentColor"
        d="M7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z"
      />
    );
  } else {
    viewBox = "-5 -8 24 24";
    svgContent = (
      <path
        stroke="currentColor"
        d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"
      />
    );
  }

  return (
    <ToolbarIcon
      data-testid={props["data-testid"]}
      size={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill={color}
    >
      {svgContent}
    </ToolbarIcon>
  );
}
