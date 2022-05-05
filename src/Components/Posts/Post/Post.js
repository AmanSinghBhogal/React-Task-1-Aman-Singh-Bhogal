import React from 'react';
import styled from 'styled-components';

const Post = ({title,body}) => {
  return (
    <Container>
        <Post__Title>
            {title}
        </Post__Title>
        <Post__Body>
            {body}
        </Post__Body>
    </Container>
  )
};

export default Post;
const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid grey;
    border-radius: 10px;
    height: 280px;
    width: 220px;
    margin: 5px;
`;
const Post__Title = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 700;
    min-height: 40%;
    border-bottom: 1px solid grey;
`;
const Post__Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    min-height: 60%;
    box-sizing: border-box;
    padding: 5px;
`;