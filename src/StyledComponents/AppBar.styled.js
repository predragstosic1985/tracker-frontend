import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';

export const CustomFooter = styled(({ styledComponentProp, ...rest }) => (
  <AppBar color='inherit' {...rest}></AppBar>
))`
  background-color: ${props =>
    props.configuration.footer.background} !important;
  background: ${props => props.configuration.footer.background} !important;
  color: ${props => props.configuration.footer.fontColor}!important;
  font-family: ${props => props.configuration.footer.fontFamily}!important;
`;

export const CustomHeader = styled(({ styledComponentProp, ...rest }) => (
  <AppBar color='inherit' {...rest}></AppBar>
))`
  background-color: ${props =>
    props.configuration.header.background} !important;
  background: ${props => props.configuration.header.background} !important;
  color: ${props => props.configuration.header.fontColor}!important;
  font-family: ${props => props.configuration.header.fontFamily}!important;
`;
