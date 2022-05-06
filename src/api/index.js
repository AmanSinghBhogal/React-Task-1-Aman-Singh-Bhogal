import axios from 'axios';

// I could have made an enviornmental variable for the My-JSON-Server API but, I did'nt so that you guys can confirm that I used My-JSON-Server.

const url = 'https://my-json-server.typicode.com/AmanSinghBhogal/React-Task-1-Aman-Singh-Bhogal/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (createdPost) => axios.post(url, createdPost);
export const updatePost = (id,updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);