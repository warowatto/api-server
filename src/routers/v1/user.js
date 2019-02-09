import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('/v1/user');
});

export default router;
