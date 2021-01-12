import api from './apiConfig'

export const getAllPosts = async (mediumId) => {
  const resp = await api.get(`/media/${mediumId}/posts/`);
  return resp.data;
}

export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`)
  return resp.data;
}

export const addPost = async (mediumId, postData) => {
  const resp = await api.post(`/media/${mediumId}/posts/`, { post: postData })
  return resp.data
}

export const putPost = async (id, postData) => {
  const resp = await api.put(`/posts/${id}`, { post: postData })
  return resp.data;
}

export const destroyPost = async (id) => {
  const resp = await api.delete(`/posts/${id}`);
  return resp;
}