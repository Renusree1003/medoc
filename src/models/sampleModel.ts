import mongoose from 'mongoose';

const sampleSchema = new mongoose.Schema({
  hospital: { type: String, required: true },
  patientName: { type: String, required: true },
  status: { type: String, enum: ['pending', 'collected'], default: 'pending' },
  agentId: { type: String, required: true },
  scheduledAt: { type: Date, required: true }
}, { timestamps: true });

export const Sample = mongoose.model('Sample', sampleSchema);
