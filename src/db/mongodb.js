import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB;

console.log("Using MongoDB database:", DB_NAME);

let client;
let db;

export async function connect(uri = MONGODB_URI, dbName = DB_NAME) {
  // if already connected → return existing db
  if (db) return db;

  if (!client) {
    client = new MongoClient(uri); // only once
    await client.connect(); // connect only once
  }

  db = client.db(dbName);
  return db;
}

// // optional clean shutdown
// process.on("SIGINT", async () => {
//   if (client) await client.close();
//   console.log("MongoDB connection closed");
//   process.exit(0);
// });
