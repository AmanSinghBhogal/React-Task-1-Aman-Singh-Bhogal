import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../actions/posts';


const Form = ({editPost, setEditPost}) => {

    const dispatch = useDispatch();

    const [Post, setPost] = useState({
        title: '',
        body: '',
        userId: 0,
        id: null
    });

    const EditPost = useSelector(
      (state) => 
                editPost && state.posts.find((p) => p.id === editPost)
    );

    useEffect(() => {
      if(EditPost)
        setPost(EditPost)
    }, [EditPost]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(editPost)
        {
            dispatch(updatePost(editPost,Post));
            handleClear();
        }
        else
        {
            dispatch(createPost(Post));
            handleClear();
        }
    };
    
    const handleClear = () => {
      setPost({
        title: '',
        body: '',
        userId: 0,
        id: null
      });
      setEditPost(null);
  }

    return (
        <Container>
            <Heading>
                {editPost? 'Update': 'Create'} Post:
            </Heading>
            <form onSubmit={handleSubmit}>
              <Inputs>

                  {/* Post Title Input */}
                  <label>Post Title:</label>
                  <input 
                    type="text" 
                    placeholder="Title*" 
                    value={Post.title}
                    required={true}
                    onChange={(e) => {
                      setPost({...Post, title: e.target.value})
                    }} 
                  />
                  
                  {/* Post Body Input */}
                  <label>Post Body:</label>
                  <textarea 
                    placeholder="Message*" 
                    rows={5} 
                    value={Post.body}
                    required={true} 
                    onChange={(e) => {
                      setPost({...Post, body: e.target.value})
                    }}
                  />

                  {/* User Id Input */}
                  <label>User ID:</label>
                  <input 
                    type="number" 
                    placeholder="User ID*" 
                    value={Post.userId}
                    required={true} 
                    onChange={(e) => {
                      setPost({...Post, userId: e.target.value})
                    }}
                  />

                  {/* Submit Button */}
                  <button type='submit' id='sub' > Submit </button>

                  {/* Clear Button */}
                  <button type='reset' id='res' onClick={handleClear} > Clear </button>
              </Inputs>
            </form>
        </Container>
    );
};

export default Form;

const Container = styled.div`
    width: 40%;
    border: 2px solid grey;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 470px;
    @media (max-width: 756px)
    {
        width: 100%;
    }
    form{
      width: 100%;
      height: 85%;
      button{
        height: 35px;
        margin: 5px 0px;
        border-radius: 50px;
        font-family: inherit;
        font-size: inherit;
        color: white;
        border: inherit;
        cursor: pointer;
      }
      #sub{
        margin-top: 10px;
        background-color: rgb(95, 245, 20);
      }
      #res{
        background-color: red;
      }
    }
`;

const Heading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
    font-size: 1.5rem;
    font-weight: 700;
    border-bottom: 2px solid grey;
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    input,label,textarea{
        padding: 8px;
        font-size: 1rem;
        font-family: inherit;
    }
    input,textarea{
      border: 1px solid grey;
      border-radius: 5px;
    }
`;