const api = import.meta.env.VITE_CONTACTS_API_URL || "http://localhost:5001";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).slice(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const getAll = async () => {
  const data = await fetch(`${api}/contacts`, { headers });
  const jsonData = await data.json();

  return jsonData.contacts;
};

export const remove = async (contact) => {
  const data = await fetch(`${api}/contacts/${contact.id}`, { method: "DELETE", headers });
  const jsonData = await data.json();

  return jsonData.contact;
};

export const create = async (body) => {
  const data = fetch(`${api}/contacts`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const jsonData = data.json;

  return jsonData.contact;
};
