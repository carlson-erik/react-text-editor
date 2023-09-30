import { MouseEventHandler, ReactNode, Ref, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../theme/context";
import { ThemeConfiguration } from "../../theme/types";

const StyledButton = styled.span<{
  active?: boolean;
  disabled?: boolean;
  theme: ThemeConfiguration;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0.25rem;
  color: ${(props) =>
    props.disabled
      ? props.theme.toolbar.text.disabled
      : props.theme.toolbar.text.primary};
  ${(props) =>
    props.active && !props.disabled
      ? `background-color: ${props.theme.toolbar.background.selected} !important;`
      : ""}

  & svg {
    fill: ${(props) =>
      props.disabled
        ? props.theme.toolbar.text.disabled
        : props.theme.toolbar.text.primary};
  }
`;

interface ActionButtonProps {
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  reference?: Ref<HTMLButtonElement>;
  "data-testid"?: string;
}

const getStateAwareTestID = (
  dataTestId: string,
  disabled: boolean,
  active: boolean
): string => {
  if (active) return `${dataTestId}-active`;
  if (disabled) return `${dataTestId}-disabled`;
  return dataTestId;
};

const ActionButton = (props: ActionButtonProps) => {
  const { theme, type } = useContext(ThemeContext);
  const { children, active, onClick, onMouseDown, reference, disabled } = props;
  const buttonTestId = props["data-testid"] || "action-button";
  return (
    <StyledButton
      onClick={onClick}
      onMouseDown={onMouseDown}
      active={active}
      ref={reference}
      data-testid={getStateAwareTestID(buttonTestId, !!disabled, !!active)}
      theme={theme[type]}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default ActionButton;
