import React from 'react';
import styled from 'styled-components';
import Posts from './Posts/Posts';
import Form from './Form';

function Home() {
  return (
    <Container>
        <Posts />
        <Form />
    </Container>
  )
};

export default Home;

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    padding: 2% 10%;
    margin: 0;
    @media (max-width: 756px)
    {
        flex-direction: column-reverse;
    }
`;