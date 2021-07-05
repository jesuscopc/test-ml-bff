import { API_CONFIG } from "../constants/api.config";
import { IProductInfo } from "../interfaces/product.interface";
const fetch = require("node-fetch");
type productResponse = {
    price: string,
    title: string,
    thumbnail: string,
    attributes: any;
}

const prettyData = (fullProductsInfo: Array<IProductInfo>): Array<productResponse> => {
  const products = fullProductsInfo.map((product) => {
    return {
      price: product.price,
      title: product.title,
      thumbnail: product.thumbnail,
      attributes: product.attributes,
    }
  });
  return products;
}

export async function searchProducts(querySearch: string = ''): Promise<any> {
  const path = `${API_CONFIG.SEARCH}?q=${querySearch}&limit=4`;
  const res = await fetch(path, {
    method: 'GET',
  });
  try {
    const result = await res.json();
    return prettyData(result.results);
  } catch (error) {
    return null; 
  }
}