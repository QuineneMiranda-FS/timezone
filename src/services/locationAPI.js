import api from "./api";

export const getLocations = () => api.get("/locations");

export const getLocationById = (id) => api.get(`/locations/${id}`);

export const createLocation = (locationData) =>
  api.post("/locations", locationData);

export const updateLocationById = (id, data) =>
  api.put(`/locations/${id}`, data);

export const deleteLocationById = (id) => api.delete(`/locations/${id}`);
