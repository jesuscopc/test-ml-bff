import { API_CONFIG } from "../constants/api.config";
const fetch = require("node-fetch");

export async function searchProducts(querySearch: string = ''): Promise<any> {
  const path = `${API_CONFIG.SEARCH}?q=${querySearch}&limit=4`;
  const res = await fetch(path, {
    method: 'GET',
  });
  try {
    const result = await res.json();
    return result;
  } catch (error) {
    return null; 
  }
}