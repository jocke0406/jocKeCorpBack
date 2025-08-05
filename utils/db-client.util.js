// utils/db-client.util.js
const { MongoClient } = require('mongodb');

const authPart =
    process.env.MONGO_DB_USERNAME && process.env.MONGO_DB_PASSWORD
        ? `${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@`
        : '';

const url = `mongodb://${authPart}${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}`;
const dbName = process.env.MONGO_DB_NAME;

let client;
let db;

async function connectDB() {
    if (db) return db; // déjà connecté
    try {
        client = new MongoClient(url, { useUnifiedTopology: true });
        await client.connect();
        db = client.db(dbName);
        console.log(`✅ Connecté à MongoDB (${url}), base "${dbName}"`);
        return db;
    } catch (err) {
        console.error(`❌ Échec de connexion MongoDB : ${err.message}`);
        process.exit(1);
    }
}

function getDB() {
    if (!db) throw new Error("La connexion MongoDB n'est pas encore établie.");
    return db;
}

module.exports = { connectDB, getDB };
