import { ReactNode, useContext, useState } from "react";
import styled from "styled-components";
/* -------- Components -------- */
import Popper from "./popper";
/* -------- Icons -------- */
import Chevron from "../icons/chevron";
import { ThemeContext } from "../../theme/context";
import { ThemeConfiguration } from "../../theme/types";

const Container = styled.div<{ disabled: boolean; theme: ThemeConfiguration }>`
  width: 12rem;
  height: 100%;
  display: flex;
  border: 1px solid ${(props) => props.theme.toolbar.border};

  background-color: ${(props) =>
    props.disabled
      ? props.theme.toolbar.background.disabled
      : props.theme.toolbar.background.primary};
`;

const SelectedValue = styled.div<{
  disabled: boolean;
  theme: ThemeConfiguration;
}>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  cursor: default;
  font-size: 14px;
  font-weight: 600;

  & svg {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
`;

const SelectedLabel = styled.span<{
  theme: ThemeConfiguration;
  disabled: boolean;
}>`
  color: ${(props) =>
    props.disabled
      ? props.theme.toolbar.text.disabled
      : props.theme.toolbar.text.selected};
`;

const IconContainer = styled.div<{
  disabled: boolean;
  theme: ThemeConfiguration;
}>`
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) =>
    props.disabled
      ? props.theme.toolbar.text.disabled
      : props.theme.toolbar.text.primary};
`;

const OLContainer = styled.ul<{ theme: ThemeConfiguration }>`
  background-color: ${(props) => props.theme.toolbar.background.primary};
  border: 1px solid ${(props) => props.theme.toolbar.border};
  border-top: 0;
  margin-block: 0;
  padding: 0;
  width: 12rem;
`;

const OptionListItem = styled.li<{
  theme: ThemeConfiguration;
  selected: boolean;
}>`
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.selected
      ? props.theme.toolbar.text.selected
      : props.theme.toolbar.text.primary};
  cursor: default;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => props.theme.toolbar.background.selected};
  }

  & svg {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  background-color: ${(props) =>
    props.selected ? props.theme.toolbar.background.selected : "transparent"};
`;

const PlaceholderText = styled.span<{ theme: ThemeConfiguration }>`
  color: ${(props) => props.theme.toolbar.text.primary};
  padding-left: 0.5rem;
`;

export type Option = {
  label: string;
  icon?: ReactNode;
  value: string;
};

interface OptionsListProps {
  options: Option[];
  selectedOption?: Option;
  onChange: (value: Option) => void;
  onClose: () => void;
  theme: ThemeConfiguration;
}

const OptionsList = (props: OptionsListProps) => {
  const { options, selectedOption, onChange, onClose, theme } = props;
  return (
    <OLContainer data-testid="options-list" theme={theme}>
      {options.map((option) => {
        return (
          <OptionListItem
            theme={theme}
            key={option.value}
            data-testid="option"
            selected={
              selectedOption && selectedOption.value === option.value
                ? true
                : false
            }
            onClick={(event) => {
              onChange(option);
              onClose();
              event.stopPropagation();
            }}
          >
            {option?.icon ? option.icon : null}
            {option.label}
          </OptionListItem>
        );
      })}
    </OLContainer>
  );
};

interface DropdownProps {
  options: Option[];
  selectedOption?: Option;
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: Option) => void;
}

const Dropdown = (props: DropdownProps) => {
  const {
    selectedOption,
    options,
    placeholder,
    onChange,
    disabled = false,
  } = props;
  const { theme, type } = useContext(ThemeContext);
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClose = () => setIsOpen(false);
  const placeholderText: string =
    placeholder && placeholder !== "" ? placeholder : "Select content";

  return (
    <>
      <Container
        theme={theme[type]}
        onClick={() => {
          if (!disabled) {
            setIsOpen(!isOpen);
          }
        }}
        disabled={disabled}
        ref={setContainerRef}
        data-testid={disabled ? "dropdown-disabled" : "dropdown"}
        className="dropdown"
      >
        <SelectedValue disabled={disabled} theme={theme[type]}>
          {selectedOption && !disabled ? (
            <>
              {selectedOption.icon ? selectedOption.icon : null}
              <SelectedLabel theme={theme[type]} disabled={disabled}>
                {selectedOption.label}
              </SelectedLabel>
            </>
          ) : (
            <PlaceholderText theme={theme[type]}>
              {placeholderText}
            </PlaceholderText>
          )}
        </SelectedValue>
        <IconContainer disabled={disabled} theme={theme[type]}>
          {isOpen ? (
            <Chevron
              size="small"
              color={theme[type].toolbar.text.primary}
              direction="down"
            />
          ) : (
            <Chevron
              size="small"
              color={theme[type].toolbar.text.primary}
              direction="up"
            />
          )}
        </IconContainer>
      </Container>
      {containerRef ? (
        <Popper
          targetRef={containerRef}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          clickOutside
          placement="bottom-start"
        >
          <OptionsList
            options={options}
            selectedOption={selectedOption || undefined}
            onChange={onChange}
            onClose={onClose}
            theme={theme[type]}
          />
        </Popper>
      ) : null}
    </>
  );
};

export default Dropdown;
