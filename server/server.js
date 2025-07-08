const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const memoryRoutes = require('./routes/memoryRoutes');

const app = express();
app.use(express.json());

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
};
app.use(cors(corsOptions));


// Routes
app.use('/api/memories', memoryRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
