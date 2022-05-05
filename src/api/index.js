import axios from 'axios';

const url = 'https://my-json-server.typicode.com/AmanSinghBhogal/React-Task-1-Aman-Singh-Bhogal/posts';

export const fetchPosts = () => axios.get(url);