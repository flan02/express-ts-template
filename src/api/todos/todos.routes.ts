import { Router } from 'express';
import * as TodoHandlers from './todos.handlers';

const router = Router();

// * Better practice
router.get('/', TodoHandlers.findAll);
router.get('/', TodoHandlers.createOne);

/*
* Another way to do the same
router.get<{}, Todo[]>('/', (_req, res) => {
  res.json([{
    content: 'booo 👻',
    done: false,
  }]);
});
*/

export default router;