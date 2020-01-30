import styled from 'styled-components';
import defaultImg from '../images/room-1.jpeg';
const StyledHero = styled.header`
  min-height: 75vh;
  /* background: url(${defaultImg}); */
  background: url(${props =>
    props.img ? props.img : defaultImg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;

  align-items: center;
  justify-content: center;
`;

export default StyledHero;
