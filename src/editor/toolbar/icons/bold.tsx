import { ToolbarIcon } from "../styled";
import { IconProps } from "../types";

export default function Bold(props: IconProps) {
  const { color, size = "large" } = props;
  return (
    <ToolbarIcon
      data-testid={props["data-testid"]}
      size={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-8.5 -7 24 24"
      fill={color}
    >
      <path d="M2 5.455v2.727h1.5c.828 0 1.5-.61 1.5-1.364 0-.753-.672-1.363-1.5-1.363H2zm3.514-1.24C6.413 4.793 7 5.744 7 6.819 7 8.575 5.433 10 3.5 10H0V.91C0 .406.448 0 1 0h2c1.657 0 3 1.221 3 2.727 0 .55-.179 1.06-.486 1.489zM2 1.819v1.818h1c.552 0 1-.407 1-.909s-.448-.909-1-.909H2z" />
    </ToolbarIcon>
  );
}
