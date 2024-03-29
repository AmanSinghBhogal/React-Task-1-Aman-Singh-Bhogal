import React,{ useEffect,useState } from 'react';
import styled from 'styled-components';
import Posts from './Posts/Posts';
import Form from './Form';
import { useDispatch } from "react-redux";
import { getPosts } from '../actions/posts';

function Home() {

    const dispatch = useDispatch();

    const [editPost, setEditPost ] = useState('');

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container>
            <Posts editPost={editPost} setEditPost={setEditPost} />
            <Form editPost={editPost} setEditPost={setEditPost} />
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