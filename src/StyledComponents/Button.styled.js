import styled from 'styled-components';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';

export const StyledButtonPlain = styled(Button)`
  color: white !important;
  background-color: red !important;
  &:hover {
    color: blue !important;
  }
`;

export const StyledButton = styled(({ styledComponentProp, ...rest }) => (
  <Button {...rest}></Button>
))`
  background-color: ${props =>
    props.configuration.button.btnBackground} !important;
  color: ${props => props.configuration.button.fontColor}!important;
  font-family: ${props => props.configuration.button.fontFamily}!important;
`;

export const StyledFab = styled(({ styledComponentProp, ...rest }) => (
  <Fab {...rest}></Fab>
))`
  background-color: ${props =>
    props.configuration.button.btnBackground} !important;
  color: ${props => props.configuration.button.fontColor}!important;
  font-family: ${props => props.configuration.button.fontFamily}!important;
`;

export const StyledIconButton = styled(({ styledComponentProp, ...rest }) => (
  <IconButton {...rest}></IconButton>
))`
  background-color: ${props =>
    props.configuration.button.btnBackground} !important;
  color: ${props => props.configuration.button.fontColor}!important;
  font-family: ${props => props.configuration.button.fontFamily}!important;
`;
