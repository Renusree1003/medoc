import express from 'express';
import { addSample, markCollected, getSamplesByAgent } from '../controllers/sampleController';

const router = express.Router();

router.post('/', addSample);
router.patch('/:id/collect', markCollected);
router.get('/agent/:agentId', getSamplesByAgent);

export default router;
