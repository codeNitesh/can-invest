import * as React from 'react';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const CustomButtonRoot = styled('button')`
  
  font-size: 0.875rem;
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  background-color: #7951F9;
  opacity: 0.8;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #7951F9;
    opacity: 1;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #7951F9;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px #7951F9;
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledButton = (props) =>{
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />
}

export default StyledButton