import mongoose from 'mongoose';

const AlertSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    priceThreshold: {
        type: Number,
        required: true
    },
    condition: {
        type: String,
        required: true,
        enum: ['greater_than', 'less_than']
    },
},
    { timestamps: true }
);

export default mongoose.model('Alert', AlertSchema);
