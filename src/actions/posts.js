import * as api from '../api';
import { FETCH_ALL,POST,UPDATE, DELETE } from '../Constants/Constant';


// Action Creators: They are functions that return actions.
export const getPosts = () => async (dispatch) => {
    try 
    {
        const { data } = await api.fetchPosts();
        
        dispatch({
            type: FETCH_ALL,
            payload: data
        });
    } 
    catch (error) 
    {
        console.log(error);
    }

};

// Action to Create New Post.
export const createPost = (createdPost) => async(dispatch) => {
    try 
    {
        const { data } = await api.createPost(createdPost);
        const post = {
            title: createdPost.title,
            body: createdPost.body,
            userId: createPost.userId,
            id: data
        }
        dispatch({
            type: POST,
            payload: post
        });
    } 
    catch (error) 
    {
        console.log(error);
    }
}

// Action to Update a Post:
export const updatePost = (id,updatedPost)=> async(dispatch) => {
    try 
    {
        const { data } = await api.updatePost(id,updatedPost);
        console.log(updatedPost);
        dispatch({
            type: UPDATE,
            payload: updatedPost
        });
    } 
    catch (error) 
    {
        console.log(error);
        // May be the post to be Updated is only on local host and not in JSON Server(hence the api call will return a error) so we need to make changes to redux store variable.
        dispatch({
            type: UPDATE,
            payload: updatedPost
        });
    }
}

// Action to Delete a Post: 
export const deletePost = (id) => async(dispatch) => {
    try 
    {
        const { data } = await api.deletePost(id);
        dispatch({
            type: DELETE,
            payload: id
        })
    } 
    catch (error) 
    {
        console.log(error);
        // May be the post to be deleted is only on local host and not in JSON Server(hence the api call will return a error) so we need to make changes to redux store variable.
        dispatch({
            type: DELETE,
            payload: id
        })
    }
}