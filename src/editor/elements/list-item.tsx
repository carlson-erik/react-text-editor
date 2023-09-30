import { RenderElementProps } from 'slate-react';
import styled from 'styled-components';

const StyledListItem = styled.li``;

const ListItemElement = (props: RenderElementProps) => {
  const { attributes, children } = props;
  return (
    <StyledListItem {...attributes} >
      {children}
    </StyledListItem>
  )
}

export default ListItemElement;