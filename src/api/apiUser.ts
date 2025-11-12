const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const USER_API = "/api/users";

export const fetchUsers = async () => {
  const response = await fetch(API_BASE_URL + USER_API);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}

export const createUser = async (user : {name: string; surname:string; email:string}) => {
  const response = await fetch(API_BASE_URL + "/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return response.json();
}

