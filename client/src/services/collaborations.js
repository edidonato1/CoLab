import api from './apiConfig';

export const getAllCollaborations = async () => {
  const resp = await api.get('/collaborations');
  return resp.data;
}

export const getOneCollaboration = async (id) => {
  const resp = await api.get(`/collaborations/${id}`);
  return resp.data;
}

export const createCollaboration = async (collaborationData) => {
  const resp = await api.post('/collaborations', {collaboration: collaborationData});
  return resp.data;
}

export const addUserToColab = async (userId, collaborationId) => {
  const resp = await api.put(`/users/${userId}/collaborations/${collaborationId}`)
  return resp.data;
}

export const addMediumToColab = async (mediumId, collaborationId) => {
  const resp = await api.put(`/media/${mediumId}/collaborations/${collaborationId}`)
  return resp.data;
}

export const addColabToUser = async (collaborationId, userId) => {
  const resp = await api.put(`/collaborations/${collaborationId}/users/${userId}`)
  return resp.data;
}

export const removeMediumFromColab = async (mediumId, collaborationId) => {
  const resp = await api.patch(`/media/${mediumId}/collaborations/${collaborationId}`)
  return resp.data;
}