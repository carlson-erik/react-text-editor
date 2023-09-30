import { RenderElementProps } from "slate-react";
import styled from "styled-components";

const HeaderOne = styled.h1<{ alignment?: string }>`
  text-align: ${(props) => props.alignment || "left"};
`;
const HeaderTwo = styled.h2<{ alignment?: string }>`
  text-align: ${(props) => props.alignment || "left"};
`;
const HeaderThree = styled.h3<{ alignment?: string }>`
  text-align: ${(props) => props.alignment || "left"};
`;
const HeaderFour = styled.h4<{ alignment?: string }>`
  text-align: ${(props) => props.alignment || "left"};
`;
const HeaderFive = styled.h5<{ alignment?: string }>`
  text-align: ${(props) => props.alignment || "left"};
`;
const HeaderSix = styled.h6<{ alignment?: string }>`
  text-align: ${(props) => props.alignment || "left"};
`;

const HeaderElement = (props: RenderElementProps) => {
  const { children, attributes, element } = props;
  const { type } = element;

  let ElementType = null;
  switch (type) {
    case "header-two":
      ElementType = HeaderTwo;
      break;
    case "header-three":
      ElementType = HeaderThree;
      break;
    case "header-four":
      ElementType = HeaderFour;
      break;
    case "header-five":
      ElementType = HeaderFive;
      break;
    case "header-six":
      ElementType = HeaderSix;
      break;
    default:
      ElementType = HeaderOne;
  }

  return (
    <ElementType
      {...attributes}
      alignment={"align" in props.element ? props.element.align : undefined}
    >
      {children}
    </ElementType>
  );
};

export default HeaderElement;
