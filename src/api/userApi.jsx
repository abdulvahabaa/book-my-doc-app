import { apiRequest } from "./apiClient";

export async function loginUser(credentials) {
  return apiRequest("/auth/login", "POST", credentials);
}

export async function fetchUserProfile() {
  return apiRequest("/user/profile", "GET");
}

export async function registerUser(data) {
  return apiRequest("/auth/register", "POST", data);
}
