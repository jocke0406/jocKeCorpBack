// app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const { connectDB } = require('./utils/db-client.util.js');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('KafkaCorp API est en service… mais personne ne sait pourquoi.');
});

// Serveur
const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`🚀 Serveur absurde lancé sur le port ${PORT}`);
        });
    } catch (err) {
        console.error('💥 Impossible de démarrer le serveur :', err);
        process.exit(1);
    }
}

startServer();
