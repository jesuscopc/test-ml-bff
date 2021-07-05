import { Request, Response} from 'express';
import { searchProducts } from '../services/search.service';

const { Router } = require('express');
const router = new Router();

router.get('/', (req: Request, res: Response): void => {
  const queryParam: any = req.query.q;
  console.log(queryParam);
  searchProducts(queryParam).then( result => {
    res.status(200).json(result);
  }).catch( () => {
    res.status(500).json('There is an error with services');
  });
});

module.exports = router;