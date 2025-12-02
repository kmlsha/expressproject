import { MongoClient } from "mongodb";

/**
 * mongodb.js
 * Simple MongoDB connection helper using the official MongoDB driver.
 *
 * Usage:
 *   const dbClient = require('./mongodb');
 *   await dbClient.connect();            // connects using MONGODB_URI or default
 *   const db = dbClient.getDb();        // use db.collection('...')...
 *   await dbClient.close();             // close connection when shutting down
 */
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB;

console.log("Using MongoDB URI:", process.env.MONGODB_URI);
console.log("Using MongoDB URI:ss", MONGODB_URI);
console.log("Using MongoDB", DB_NAME);

let client = null;
let db = null;

async function connect(uri = MONGODB_URI, dbName = DB_NAME) {
  if (db) return db;

  client = new MongoClient(uri); // ← no more deprecated options

  await client.connect();
  db = client.db(dbName);
  return db;
}
function getDb() {
  if (!db) {
    throw new Error("MongoDB not connected. Call connect() first.");
  }
  return db;
}

async function close() {
  if (client) {
    await client.close();
    client = null;
    db = null;
  }
}

export default { connect, getDb, close };

// import { MongoClient } from "mongodb";

// let client;
// let db;

// export async function connect(uri = MONGODB_URI, dbName = DB_NAME) {
//   // if already connected → return existing db
//   if (db) return db;

//   if (!client) {
//     client = new MongoClient(uri); // only once
//     await client.connect(); // connect only once
//   }

//   db = client.db(dbName);
//   return db;
// }

// // optional clean shutdown
// process.on("SIGINT", async () => {
//   if (client) await client.close();
//   console.log("MongoDB connection closed");
//   process.exit(0);
// });
