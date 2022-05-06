import React from 'react';
import styled from 'styled-components';
import Post from './Post/Post';
import { useSelector } from "react-redux";

function Posts({editPost, setEditPost}) {
      const posts = useSelector(
        (state) => 
                state.posts
    );
    return (
      <Container>
          {
            posts.map((post) => (
              <Post key={post.id} post={post} editPost={editPost} setEditPost={setEditPost}/>
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
    box-sizing: border-box;
    width: 60%;
    min-height: 70vh;
    @media (max-width: 756px)
    {
        width: 100%;
    }
`;