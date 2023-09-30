import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../theme/context";
import type { ThemeConfiguration } from "../../theme/types";
/* -------- Styled Components -------- */
const Action = styled.a`
  text-decoration: none;
  &:active > button {
    position: relative;
    top: 2px;
  }
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  border: 1px solid transparent;
  border-radius: 4px;
  text-decoration: none;

  display: flex;
  justify-items: center;
`;
const Primary = styled(StyledButton)<{ theme: ThemeConfiguration }>`
  color: ${(props) => props.theme.toolbar.button.text} !important;
  background-color: ${(props) =>
    props.theme.toolbar.button.background} !important;
  &:focus {
    outline-color: #0f62d7;
  }
`;
const Secondary = styled(StyledButton)<{ theme: ThemeConfiguration }>`
  color: #a9aeb7;
  background-color: #52555f;
  border: 1px solid #e5e8ec;

  &:hover {
    background-color: #a9aeb7;
    color: #ffffff;
    & svg {
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
        hue-rotate(7deg) brightness(102%) contrast(102%);
    }
  }
  &:focus {
    outline-color: #a9aeb7;
  }
`;
const Label = styled.span`
  font-size: 12px;
  line-height: 20px;
  color: unset !important;
  font-weight: 700;
`;

interface ButtonProps {
  children: any;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  primary?: boolean;
  "data-testid"?: string;
}

function Button(props: ButtonProps) {
  const { children, onClick, primary } = props;
  const { theme, type } = useContext(ThemeContext);
  const ButtonComponent = primary ? Primary : Secondary;
  return (
    <Action
      onClick={onClick}
      data-testid={props["data-testid"] || "ToolbarButton"}
    >
      <ButtonComponent theme={theme[type]}>
        <Label theme={theme[type]}>{children}</Label>
      </ButtonComponent>
    </Action>
  );
}

export default Button;
