const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function apiFetch(path: string, options?: RequestInit) {
  const url = `${BASE_URL}${path}`;

  return fetch(url, {
    ...options,
  });
}
