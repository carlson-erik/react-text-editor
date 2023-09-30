import { useSlate } from "slate-react";
/* -------- Components -------- */
import ActionButton from "../components/action-button";
/* -------- Actions & Types -------- */
import { getElementNode, isTextElement, setElementFormat } from "../../actions";
/* -------- Icon Components -------- */
import Align from "../icons/align";
import { getContainer, isInlineActive } from "../../actions";
import { SectionContainer } from "../styled";
import { ThemeContext } from "../../theme/context";
import { useContext } from "react";

const AlignmentSection = (props: { disabled?: boolean }) => {
  const { disabled } = props;
  const { theme, type } = useContext(ThemeContext);
  const primaryColor = theme[type].toolbar.text.primary;
  const selectedColor = theme[type].toolbar.text.selected;
  const editor = useSlate();
  const activeElement = isInlineActive(editor)
    ? getContainer(editor)
    : getElementNode(editor);

  // Determine currently active/non-active alignments
  const isAlignConfigurable =
    !disabled && !!activeElement && "align" in activeElement;
  const isDisabled = !!disabled || !isAlignConfigurable;
  const hasLeftAlignment =
    isAlignConfigurable && activeElement?.align === "left";
  const hasCenterAlignment =
    isAlignConfigurable && activeElement?.align === "center";
  const hasRightAlignment =
    isAlignConfigurable && activeElement.align === "right";
  const hasJustifyAlignment =
    isAlignConfigurable && activeElement.align === "justify";

  return (
    <SectionContainer theme={theme[type]} disabled={disabled}>
      <ActionButton
        active={hasLeftAlignment}
        onMouseDown={(event) => {
          event.preventDefault();
          event.stopPropagation();
          if (isDisabled) return;
          if (!hasLeftAlignment) {
            setElementFormat(editor, "align", "left");
          }
        }}
        disabled={isDisabled}
        data-testid="LeftAlignmentButton"
      >
        <Align
          direction="left"
          color={hasLeftAlignment ? selectedColor : primaryColor}
        />
      </ActionButton>
      <ActionButton
        active={hasCenterAlignment}
        onMouseDown={(event) => {
          event.preventDefault();
          event.stopPropagation();
          if (isDisabled) return;
          if (!hasCenterAlignment) {
            setElementFormat(editor, "align", "center");
          }
        }}
        disabled={isDisabled}
        data-testid="CenterAlignmentButton"
      >
        <Align
          direction="center"
          color={hasCenterAlignment ? selectedColor : primaryColor}
        />
      </ActionButton>
      <ActionButton
        active={hasRightAlignment}
        onMouseDown={(event) => {
          event.preventDefault();
          event.stopPropagation();
          if (isDisabled) return;
          if (!hasRightAlignment) {
            setElementFormat(editor, "align", "right");
          }
        }}
        disabled={isDisabled}
        data-testid="RightAlignmentButton"
      >
        <Align
          direction="right"
          color={hasRightAlignment ? selectedColor : primaryColor}
        />
      </ActionButton>
      <ActionButton
        active={hasJustifyAlignment}
        onMouseDown={(event) => {
          event.preventDefault();
          event.stopPropagation();
          if (isDisabled) return;
          if (!hasJustifyAlignment) {
            setElementFormat(editor, "align", "justify");
          }
        }}
        disabled={isDisabled}
        data-testid="JustifyAlignmentButton"
      >
        <Align
          direction="justify"
          color={hasJustifyAlignment ? selectedColor : primaryColor}
        />
      </ActionButton>
    </SectionContainer>
  );
};

export default AlignmentSection;
