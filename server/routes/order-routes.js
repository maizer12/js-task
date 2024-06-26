import express from 'express';
import ordersController from '../controllers/orders-controller.js';

const router = express.Router();

router.get('/orders', ordersController.getAll);
router.get('/order/:id', ordersController.getAllProducts);
router.delete('/order/:id', ordersController.delete);
router.post('/orders', ordersController.create);

export default router;
