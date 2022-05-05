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
    height: 250px;
    width: 200px;
`;
const Post__Title = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: 700;
    height: 30%;
    border-bottom: 1px solid grey;
`;
const Post__Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    height: 70%;
`;