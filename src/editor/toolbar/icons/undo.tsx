import styled from "styled-components";
import { IconProps } from "../types";

const UndoIcon = styled.svg<{ size: "small" | "large" }>`
  height: ${(props) => (props.size === "large" ? "24" : "20")}px;
  width: ${(props) => (props.size === "large" ? "24" : "20")}px;
`;

export default function Undo(props: IconProps) {
  const { color, size = "large" } = props;
  return (
    <UndoIcon
      data-testid={props["data-testid"]}
      size={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.5 -2 24 24"
      fill={color}
    >
      <path d="M5.308 7.612l1.352-.923a.981.981 0 0 1 1.372.27 1.008 1.008 0 0 1-.266 1.388l-3.277 2.237a.981.981 0 0 1-1.372-.27L.907 6.998a1.007 1.007 0 0 1 .266-1.389.981.981 0 0 1 1.372.27l.839 1.259C4.6 3.01 8.38 0 12.855 0c5.458 0 9.882 4.477 9.882 10s-4.424 10-9.882 10a.994.994 0 0 1-.988-1c0-.552.443-1 .988-1 4.366 0 7.906-3.582 7.906-8s-3.54-8-7.906-8C9.311 2 6.312 4.36 5.308 7.612z" />
    </UndoIcon>
  );
}
