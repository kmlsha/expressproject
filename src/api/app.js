import serverless from "serverless-http";
import express, { json } from "express";
const app = express();
app.use(json());

// Example route
app.get("/users", (req, res) => {
  res.json({ message: "List of users" });
});

export default app; // your normal Express app
export const handler = serverless(app); // Vercel serverless handler
