import express from 'express';
import { homeController } from '../controllers';

const router = express.Router();

router.get('/', homeController.show);

module.exports = router;
