const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://api.example.com";

export async function apiRequest(
  endpoint,
  method = "GET",
  body = null,
  headers = {}
) {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
}
