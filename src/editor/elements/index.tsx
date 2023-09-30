import styled from 'styled-components';
/* -------- Types -------- */
import { RenderElementProps } from 'slate-react';
/* -------- Styled Components -------- */
const StyledParagraph = styled.p<{alignment?: string}>`
  text-align: ${props => props.alignment || 'left'};
  padding: 0 0 0.5rem 0;
`;

const ParagraphElement = (props:RenderElementProps) => {
  return (
    <StyledParagraph 
      {...props.attributes} 
      alignment={'align' in props.element ? props.element.align : undefined}
    >
      {props.children}
    </StyledParagraph>
  )
};

export default ParagraphElement;