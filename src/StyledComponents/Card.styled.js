import styled from 'styled-components';
import Card from '@mui/material/Card';

export const CustomCard = styled(({ styledComponentProp, ...rest }) => (
  <Card {...rest}></Card>
))`
  background-color: ${props =>
    props.configuration.card.cardBackground} !important;
  color: ${props => props.configuration.card.fontColor}!important;
  font-family: ${props => props.configuration.card.fontFamily}!important;
`;
