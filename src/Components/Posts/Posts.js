import React from 'react';
import styled from 'styled-components';
import Post from './Post/Post';

function Posts() {
  return (
    <Container>
        <Post title={"Dummy Post 1"} body={"Dummy Post Message."} />
        <Post title={"Dummy Post 2"} body={"Dummy Post Message."} />
        <Post title={"Dummy Post 3"} body={"Dummy Post Message."} />
        <Post title={"Dummy Post 4"} body={"Dummy Post Message."} />
    </Container>
  )
};

export default Posts;

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 10px;
    flex-wrap: wrap;
    border: 2px solid grey;
    border-radius: 10px;
    box-sizing: border-box;
    width: 60%;
    min-height: 70vh;
    @media (max-width: 756px)
    {
        width: 100%;
    }
`;