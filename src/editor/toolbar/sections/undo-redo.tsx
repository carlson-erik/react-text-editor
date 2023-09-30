import { useContext } from "react";
import { useSlate } from "slate-react";
/* -------- Components, Theme -------- */
import ActionButton from "../components/action-button";
import { ThemeContext } from "../../theme/context";
/* -------- Icon & Styled Components -------- */
import Undo from "../icons/undo";
import Redo from "../icons/redo";
import { SectionContainer } from "../styled";

const UndoRedoSection = (props: { disabled?: boolean }) => {
  const { disabled } = props;
  const { theme, type } = useContext(ThemeContext);
  const primaryColor = theme[type].toolbar.text.primary;
  const selectedColor = theme[type].toolbar.text.selected;
  const editor = useSlate();
  const hasUndos = editor.history.undos.length > 0;
  const hasRedos = editor.history.redos.length > 0;

  return (
    <SectionContainer theme={theme[type]} disabled={disabled}>
      <ActionButton
        onMouseDown={(event) => {
          event.preventDefault();
          event.stopPropagation();
          if (disabled) return;
          if (hasUndos) {
            editor.undo();
          }
        }}
        disabled={disabled || !hasUndos}
        data-testid="undo-button"
      >
        <Undo size="small" color={hasUndos ? selectedColor : primaryColor} />
      </ActionButton>
      <ActionButton
        onMouseDown={(event) => {
          event.preventDefault();
          event.stopPropagation();
          if (disabled) return;
          if (hasRedos) {
            editor.redo();
          }
        }}
        disabled={disabled || !hasRedos}
        data-testid="redo-button"
      >
        <Redo size="small" color={hasRedos ? selectedColor : primaryColor} />
      </ActionButton>
    </SectionContainer>
  );
};

export default UndoRedoSection;
