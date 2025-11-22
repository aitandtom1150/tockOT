// src/routes/otDetail.routes.js
import express from 'express';
import {
  getDetailsByOtId,
  createDetailsForOt
} from '../controllers/otDetail.controller.js';

const router = express.Router();

// GET /api/ot/10/details
router.get('/:id/details', getDetailsByOtId);

// POST /api/ot/10/details
router.post('/:id/details', createDetailsForOt);

export default router;
