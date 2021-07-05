import { Request, Response} from 'express';
import { searchProducts } from '../services/search.service';

const { Router } = require('express');
const router = new Router();

router.get('/', (req: Request, res: Response) => {
  const queryParam: any = req.query.q;
  searchProducts(queryParam).then( result => {
    res.status(200).json(result.results);
  }).catch( err => {
    console.log(err);
    res.status(500).json('THre is an error with services');
  });
});

module.exports = router;