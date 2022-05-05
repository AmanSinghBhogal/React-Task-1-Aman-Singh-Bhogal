import React from 'react';
import styled from 'styled-components';

function NavBar() {
  return (
    <Container>
        <h2>React Task 1: Aman Singh Bhogal.</h2>
    </Container>
  )
}

export default NavBar;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    border: 2px solid grey;
    margin: 10px 0px;
    border-radius: 10px;
    width: 80vw;
    box-sizing: border-box;
    flex-wrap: wrap;
`;