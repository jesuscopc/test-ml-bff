import { Request, Response} from 'express';
import { IProductInfo } from "../interfaces/product.interface";
import { SearchService } from '../services';

const { Router } = require('express');
const router = new Router();

type productResponse = {
  id: string,
  price: string,
  title: string,
  thumbnail: string,
  address: string;
}

const prettyData = (fullProductsInfo: Array<IProductInfo>): Array<productResponse> => {
const products = fullProductsInfo.map((product) => {
  return {
    id: product.id,
    price: product.price,
    title: product.title,
    thumbnail: product.thumbnail,
    address: product.address.state_name,
  }
});
return products;
}

router.get('/', (req: Request, res: Response): void => {
  const queryParam: any = req.query.q;
  SearchService.searchProducts(queryParam).then( (result: any) => {
    const minifedData = prettyData(result.results);
    res.status(200).json(minifedData);
  }).catch( () => {
    res.status(500).json('There is an error with services');
  });
});

module.exports = router;