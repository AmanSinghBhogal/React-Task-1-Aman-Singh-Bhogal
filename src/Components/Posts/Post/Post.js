import React from 'react';
import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';

const Post = ({post,editPost, setEditPost}) => {

    const dispatch = useDispatch();

    return (
        <Container>
            <Post__Title>
                <Title>
                    {post.title}
                </Title>
                <EditIcon onClick={() => setEditPost(post.id)} />
            </Post__Title>
            <Post__Body>
                <Content>{post.body}</Content>
                <DeleteIcon onClick={() => {
                    dispatch(deletePost(post.id));
                }}/>
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
    @media (max-width: 756px)
    {
        width: 100%;
    }
`;
const Post__Title = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 700;
    width: 100%;
    min-height: 40%;
    border-bottom: 1px solid grey;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

EditIcon = styled(EditIcon)`
    cursor: pointer;
`;
DeleteIcon = styled(DeleteIcon)`
    cursor: pointer;
`;

const Post__Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    font-size: 1rem;
    min-height: 60%;
    box-sizing: border-box;
    padding: 5px;
`;
const Content = styled.div`
    
`;