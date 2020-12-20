import api from './apiConfig';

export const getAllColabPosts = async (collaborationId) => {
  const resp = await api.get(`/collaborations/${collaborationId}/colab_posts`)
  return resp.data
}

export const getOneColabPost = async (id) => {
  const resp = api.get(`/colab_posts/${id}`)
  return resp.data
}

export const addColabPost = async (collaborationId, postData) => {
  const resp = await api.post(`/collaborations/${collaborationId}/colab_posts`, { colab_post: postData })
  return resp.data;
}

export const destroyColabPost = async (id) => {
  const resp = await api.delete(`/colab_posts/${id}`);
  return resp;
}