import { useContext } from "react";
import { RenderElementProps } from "slate-react";
import styled from "styled-components";
import { ThemeContext } from "../theme/context";
import { ThemeConfiguration } from "../theme/types";

const OrderedList = styled.ol<{ theme: ThemeConfiguration }>`
  & li {
    color: ${(props) => props.theme.editor.text.primary};
  }
`;

const BulletedList = styled.ul<{ theme: ThemeConfiguration }>`
  & li {
    color: ${(props) => props.theme.editor.text.primary};
  }
`;

const ListElement = (props: RenderElementProps) => {
  const { attributes, children, element } = props;
  const { theme, type } = useContext(ThemeContext);
  const { type: elementType } = element;
  let ListType;

  if (elementType === "ordered-list") {
    ListType = OrderedList;
  } else {
    ListType = BulletedList;
  }

  return (
    <ListType {...attributes} theme={theme[type]}>
      {children}
    </ListType>
  );
};

export default ListElement;
