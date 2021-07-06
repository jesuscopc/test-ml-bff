import { Request, Response} from 'express';
import { ProductService } from '../services';

const { Router } = require('express');
const router = new Router();

type productResponse = {
    thumbnail: string,
    title: string,
    condition: string,
    price: string,
    soldQuantity: number,
    description: string,
}

const prettyData = (fullProductsInfo: any, description: string = ''): productResponse => {
  return {
    thumbnail: fullProductsInfo.thumbnail,
    title: fullProductsInfo.title,
    condition: fullProductsInfo.condition,
    price: fullProductsInfo.price,
    soldQuantity: fullProductsInfo.sold_quantity,
    description: description,
  }
}

router.get('/:productId', async (req: Request, res: Response): Promise<any> => {
  const { productId } = req.params;
  try {
    const resultDetail = await ProductService.getProductDetail(productId);
    const resultDesc = await ProductService.getProductDescription(productId);
    const dataMinifed = prettyData(resultDetail, resultDesc?.plain_text);
    res.status(200).json(dataMinifed);
  } catch (error) {
    res.status(500).json('There is an error with services');
  }
});

module.exports = router;