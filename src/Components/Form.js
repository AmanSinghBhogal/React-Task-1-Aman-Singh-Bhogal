import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <Container>
        Form Comes Here.
    </Container>
  )
};

export default Form;

const Container = styled.div`
    width: 40%;
    border: 2px solid grey;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    @media (max-width: 756px)
    {
        width: 100%;
    }
`;