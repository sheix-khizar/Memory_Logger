const express = require('express');
const router = express.Router();
const Memory = require('../models/Memory');

// Add Memory
router.post('/add', async (req, res) => {
    try {
        const { content } = req.body;
        const newMemory = new Memory({ content });
        await newMemory.save();
        res.json({ message: 'Memory added successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get All Memories
router.get('/', async (req, res) => {
    try {
        const memories = await Memory.find().sort({ createdAt: -1 });
        res.json(memories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Search Memories
router.get('/search', async (req, res) => {
    try {
        const { keyword } = req.query;
        const memories = await Memory.find({ content: { $regex: keyword, $options: 'i' } });
        res.json(memories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Memory.findByIdAndDelete(req.params.id);
        res.json({ message: 'Memory deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;