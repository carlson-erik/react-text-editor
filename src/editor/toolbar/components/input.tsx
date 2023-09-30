import { ChangeEvent, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../theme/context";
import { ThemeConfiguration } from "../../theme/types";
/* -------- Styled Components -------- */
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.5rem;
`;

const ThemedInput = styled.input<{ theme: ThemeConfiguration }>`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.toolbar.border};
  color: ${(props) => props.theme.toolbar.text.primary};
  background-color: ${(props) => props.theme.toolbar.background.primary};
  padding: 0.25rem;
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
  &:focus {
    outline-color: ${(props) => props.theme.toolbar.border};
  }
  &:disabled {
    background-color: ${(props) => props.theme.toolbar.text.disabled};
  }
`;

const ThemedLabel = styled.label<{ theme: ThemeConfiguration }>`
  color: #a9aeb7;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 4px;
`;

type InputTypes = "text" | "password";

interface InputProps {
  id: string;
  type: InputTypes;
  label?: string;
  value?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  "data-testid"?: string;
}

export default function Input(props: InputProps) {
  const {
    id,
    label,
    type: inputType,
    placeholder,
    value,
    disabled = false,
    onChange,
  } = props;
  const { theme, type } = useContext(ThemeContext);
  return (
    <InputContainer>
      {label && label !== "" && (
        <ThemedLabel data-testid="input-label" htmlFor={id} theme={theme[type]}>
          {label}
        </ThemedLabel>
      )}
      <ThemedInput
        id={id}
        type={inputType}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        theme={theme[type]}
        data-testid={props["data-testid"] || "input"}
      />
    </InputContainer>
  );
}
