import api from './apiConfig'

export const getAllMedia = async () => {
  const resp = await api.get('/media');
  return resp.data;
}

export const getOneMedium = async (id) => {
  const resp = await api.get(`/media/${id}`);
  return resp.data;
}

export const addMedium = async (mediumId, userId) => {
  const resp = await api.put(`/media/${mediumId}/users/${userId}`)
  return resp.data;
}

export const removeMediun = async (mediumId, userId) => {
  const resp = await api.patch(`/media/${mediumId}/users/${userId}`)
}