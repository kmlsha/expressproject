import express from "express";
import { router } from "./src/router/router.js";
import port from "./src/index.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, "0.0.0.0", () =>
  console.log(`Example app listening on port ${port}`),
);
