import axios from 'axios';

//http://localhost:4000/posts/ = proxy

//GET prxoy
export const getPostsRequest = async ()=> await axios.get("/posts/");

//GET prxoy:id
export const getPostRequest = async (id)=> await axios.get(`/posts/${id}`);

//POST prxoy
export const createPostRequest = async (post)=> await axios.post("/posts/", post);

//PUT prxoy:id
export const updatePostRequest = async (id, post)=> await axios.put(`/posts/${id}`, post);

//DELETE prxoy:id
export const deletePostRequest = async (id)=> await axios.delete(`/posts/${id}`);