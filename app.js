import express from "express";
import { router } from "./router.js";
import port from "./index.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
