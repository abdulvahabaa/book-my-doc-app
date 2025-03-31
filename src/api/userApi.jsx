import { apiRequest } from "./apiClient";

export async function registerUser(data) {
  return apiRequest("/user/signup", "POST", data);
}
export async function loginUser(credentials) {
  return apiRequest("/auth/login", "POST", credentials);
}

export async function fetchUserProfile() {
  return apiRequest("/user/profile", "GET");
}

