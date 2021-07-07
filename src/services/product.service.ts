import { API_CONFIG } from "../constants/api.config";
const fetch = require("node-fetch");

export async function getProductDetail(productId: string): Promise<any> {
  const path = `${API_CONFIG.PRODUCT}/${productId}`;
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

export async function getProductDescription(productId: string): Promise<any> {
  const path = `${API_CONFIG.PRODUCT}/${productId}/description`;
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