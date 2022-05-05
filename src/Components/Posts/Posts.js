import React from 'react';
import styled from 'styled-components';
import Post from './Post/Post';
import { useSelector } from "react-redux";

function Posts() {
      const posts = useSelector(
        (state) => 
                state.posts
    );
    console.log(`Posts are: ${posts}`);
    return (
      <Container>
          {
            posts.map((post) => (
              <Post key={post.id} title={post.title} body={post.body} />
            ))
          }
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