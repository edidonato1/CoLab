import api from './apiConfig'

export const getAllMedia = async () => {
  const resp = await api.get('/media');
  return resp.data;
}

export const getOneMedium = async (id) => {
  const resp = await api.get(`/media/${id}`);
  return resp.data
}