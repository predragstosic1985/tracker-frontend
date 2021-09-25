import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const StyledTypography = styled(({ styledComponentProp, ...rest }) => (
  <Typography {...rest}></Typography>
))`
  color: ${props => props.configuration.typography.fontColor}!important;
  font-family: ${props => props.configuration.typography.fontFamily}!important;
`;
