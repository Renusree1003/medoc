import { Request, Response } from 'express';
import { Sample } from '../models/sampleModel';

export const addSample = async (req: Request, res: Response) => {
  try {
    const sample = new Sample(req.body);
    await sample.save();
    res.status(201).json(sample);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add sample', error: err });
  }
};

export const markCollected = async (req: Request, res: Response) => {
  try {
    const sample = await Sample.findByIdAndUpdate(
      req.params.id,
      { status: 'collected' },
      { new: true }
    );
    if (!sample) return res.status(404).json({ message: 'Sample not found' });
    res.json(sample);
  } catch (err) {
    res.status(500).json({ message: 'Failed to mark collected', error: err });
  }
};

export const getSamplesByAgent = async (req: Request, res: Response) => {
  try {
    const samples = await Sample.find({ agentId: req.params.agentId });
    res.json(samples);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch samples', error: err });
  }
};
