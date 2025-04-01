import { apiRequest } from "./apiClient";

export const loginUser = async (credentials) => {
  try {
    // return await apiRequest("/auth/login", "POST", credentials);
    return await apiRequest("/users/login", "POST", credentials);
  } catch (error) {
    throw new Error(error.message || "Login failed!");
  }
};

export const registerUser = async (data) => {
  try {
    return await apiRequest("/users/signup", "POST", data);
  } catch (error) {
    throw new Error(error.message || "Registration failed!");
  }
};

export const logoutUser = async () => {
  try {
    return await apiRequest("/auth/logout", "POST");
  } catch (error) {
    throw new Error(error.message || "Logout failed!");
  }
};

export const registerDoctor = async (data) => {
  try {
    return await apiRequest("/doctors/signup", "POST", data);
  } catch (error) {
    throw new Error(error.message || "Registration failed!");
  }
};

export const loginDoctor = async (credentials) => {
  try {
    return await apiRequest("/doctors/login", "POST", credentials);
  } catch (error) {
    throw new Error(error.message || "Login failed!");
  }
};

export const logoutDoctor = async () => {
  try {
    return await apiRequest("/doctors/logout", "POST");
  } catch (error) {
    throw new Error(error.message || "Logout failed!");
  }
};


