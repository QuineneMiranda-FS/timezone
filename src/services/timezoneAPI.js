import api from "./api";

export const getTimeZone = () => api.get("/timezones");

export const createTimeZone = (data) => api.post("/timezones", data);

export const updateTimeZoneById = (id, data) =>
  api.put(`/timezones/${id}`, data);

export const deleteTimeZoneById = (id) => api.delete(`/timezones/${id}`);

export const getLocations = () => api.get("/locations");
