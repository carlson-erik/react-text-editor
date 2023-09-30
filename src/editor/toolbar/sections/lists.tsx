import { useSlate } from "slate-react";
/* -------- Components -------- */
import ActionButton from "../components/action-button";
/* -------- Icon Components -------- */
import Indent from "../icons/indent";
import List from "../icons/list";
import Unindent from "../icons/unindent";
/* -------- Actions & Types-------- */
import {
  canIndentListItem,
  canOutdentListItem,
  getElementNode,
  getParentElementNode,
  indentListItem,
  outdentListItem,
  setElementType,
} from "../../actions";
import {
  getContainer,
  getContainerParent,
  isInlineActive,
} from "../../actions";
import { SectionContainer } from "../styled";
import { useContext } from "react";
import { ThemeContext } from "../../theme/context";

const ListSection = (props: { disabled?: boolean }) => {
  const { disabled } = props;
  const { theme, type } = useContext(ThemeContext);
  const primaryColor = theme[type].toolbar.text.primary;
  const selectedColor = theme[type].toolbar.text.selected;
  const disabledColor = theme[type].toolbar.text.disabled;
  const editor = useSlate();
  const activeInline = isInlineActive(editor);
  const activeElement = activeInline
    ? getContainer(editor)
    : getElementNode(editor);
  const activeElementParent = activeInline
    ? getContainerParent(editor)
    : getParentElementNode(editor);
  const canIndent = canIndentListItem(editor);
  const canOutdent = canOutdentListItem(editor);

  if (!activeElement) {
    return null;
  }

  const isOrderedList = activeElementParent?.type === "ordered-list";
  const isBulletedList = activeElementParent?.type === "bulleted-list";

  return (
    <SectionContainer theme={theme[type]} disabled={disabled}>
      <ActionButton
        active={isOrderedList}
        onMouseDown={(event) => {
          event.preventDefault();
          event.stopPropagation();
          if (disabled) return;
          setElementType(editor, "ordered-list");
        }}
        disabled={disabled}
        data-testid="OrderedListButton"
      >
        <List
          ordered={true}
          color={isOrderedList ? selectedColor : primaryColor}
        />
      </ActionButton>
      <ActionButton
        active={isBulletedList}
        onMouseDown={(event) => {
          event.preventDefault();
          event.stopPropagation();
          if (disabled) return;
          setElementType(editor, "bulleted-list");
        }}
        disabled={disabled}
        data-testid="BulletedListButton"
      >
        <List
          ordered={false}
          color={isBulletedList ? selectedColor : primaryColor}
        />
      </ActionButton>
      {activeElement?.type === "list-item" ? (
        <>
          <ActionButton
            onMouseDown={(event: any) => {
              event.preventDefault();
              event.stopPropagation();
              if (disabled || !canOutdent) return;
              if (canOutdent) {
                outdentListItem(editor);
              }
            }}
            disabled={disabled || !canOutdent}
            data-testid="OutdentButton"
          >
            <Unindent color={canOutdent ? primaryColor : disabledColor} />
          </ActionButton>
          <ActionButton
            onMouseDown={(event) => {
              event.preventDefault();
              event.stopPropagation();
              if (disabled || !canIndent) return;
              if (canIndent) {
                indentListItem(editor);
              }
            }}
            disabled={disabled || !canIndent}
            data-testid="IndentButton"
          >
            <Indent color={canIndent ? primaryColor : disabledColor} />
          </ActionButton>
        </>
      ) : null}
    </SectionContainer>
  );
};

export default ListSection;
