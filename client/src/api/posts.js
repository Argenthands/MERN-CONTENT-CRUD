import axios from 'axios';

export const getPostsRequest = async ()=> await axios.get("/posts/");
export const getPostRequest = async (id)=> await axios.get(`/posts/${id}`);
export const createPostRequest = async (post)=> await axios.post("/posts/", post);
export const updatePostRequest = async (id, post)=> await axios.put(`/posts/${id}`, post);
export const deletePostRequest = async (id)=> await axios.delete(`/posts/${id}`);