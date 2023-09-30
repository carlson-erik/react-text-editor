import { useContext } from "react";
import { useSlate } from "slate-react";
/* -------- Components -------- */
import ActionButton from "../../components/action-button";
import { SectionContainer } from "../../styled";
import { ThemeContext } from "../../../theme/context";
/* -------- Actions & Types -------- */
import { isTextFormatActive, toggleTextFormat } from "../../../actions";
/* -------- Icon Components -------- */
import Bold from "../../icons/bold";
import Italic from "../../icons/italic";
import Strikethrough from "../../icons/strikethrough";
import Underline from "../../icons/underline";
import TextColorSection from "./color";

const TextFormatSection = () => {
  const editor = useSlate();
  const { theme, type } = useContext(ThemeContext);
  const primaryColor = theme[type].toolbar.text.primary;
  const selectedColor = theme[type].toolbar.text.selected;
  const isBold = isTextFormatActive(editor, "bold");
  const isItalics = isTextFormatActive(editor, "italics");
  const isUnderline = isTextFormatActive(editor, "underline");
  const isStrikethrough = isTextFormatActive(editor, "strikethrough");
  return (
    <>
      <SectionContainer theme={theme[type]} noSeparator>
        <ActionButton
          active={isBold}
          onMouseDown={(event) => {
            event.preventDefault();
            event.stopPropagation();
            toggleTextFormat(editor, "bold");
          }}
          data-testid="BoldButton"
        >
          <Bold color={isBold ? selectedColor : primaryColor} />
        </ActionButton>
        <ActionButton
          active={isItalics}
          onMouseDown={(event) => {
            event.preventDefault();
            event.stopPropagation();
            toggleTextFormat(editor, "italics");
          }}
          data-testid="ItalicsButton"
        >
          <Italic color={isItalics ? selectedColor : primaryColor} />
        </ActionButton>
        <ActionButton
          active={isUnderline}
          onMouseDown={(event) => {
            event.preventDefault();
            event.stopPropagation();
            toggleTextFormat(editor, "underline");
          }}
          data-testid="UnderlineButton"
        >
          <Underline color={isUnderline ? selectedColor : primaryColor} />
        </ActionButton>
        <ActionButton
          active={isStrikethrough}
          onMouseDown={(event) => {
            event.preventDefault();
            event.stopPropagation();
            toggleTextFormat(editor, "strikethrough");
          }}
          data-testid="StrikethroughButton"
        >
          <Strikethrough
            color={isStrikethrough ? selectedColor : primaryColor}
          />
        </ActionButton>
      </SectionContainer>
      <TextColorSection />
    </>
  );
};

export default TextFormatSection;
