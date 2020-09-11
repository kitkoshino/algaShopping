import styled from 'styled-components';
import bg from '../../assets/bg.svg';

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #F8F5EC;
  background-image: url(${bg});
  background-size: cover;
  background-position: center center;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 734px;
  height: 574px;
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0,0,0, 0.5);
  border-radius: 20px;

`
