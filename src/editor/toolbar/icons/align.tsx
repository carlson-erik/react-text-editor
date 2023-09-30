import { ToolbarIcon } from "../styled";
import { IconProps } from "../types";

interface AlignProps extends IconProps {
  direction: "left" | "center" | "right" | "justify";
}

export default function Align(props: AlignProps) {
  const { color, direction, size = "large" } = props;

  let viewBox, svgContent;

  switch (direction) {
    case "left":
      viewBox = "-5 -7 24 24";
      svgContent = (
        <path d="M1 0h6a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm0 8h8a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
      );
      break;
    case "center":
      viewBox = "-5 -7 24 24";
      svgContent = (
        <path d="M3 0h8a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 8h8a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
      );
      break;
    case "right":
      viewBox = "-5 -7 24 24";
      svgContent = (
        <path d="M7 0h6a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2zM5 8h8a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
      );
      break;
    default:
      viewBox = "-5 -7 24 24";
      svgContent = (
        <path d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
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
