import { apiRequest } from "./apiClient";

export async function loginUser(credentials) {
  try {
    // return await apiRequest("/auth/login", "POST", credentials);
    return await apiRequest("/users/login", "POST", credentials);
  } catch (error) {
    throw new Error(error.message || "Login failed!");
  }
}

export async function registerUser(data) {
  try {
    return await apiRequest("/users/signup", "POST", data);
  } catch (error) {
    throw new Error(error.message || "Registration failed!");
  }
}
