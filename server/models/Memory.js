const mongoose = require('mongoose');

const memorySchema = new mongoose.Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Memory', memorySchema);
