import { connect } from "../mongodb.js";

let orderAdd = async (req, res) => {
  const db = await connect();
  const response = await db.collection("movies").insertOne({
    title: "The Great Train Robberys",
    year: 1903,
  });
  return res.send({
    status: 0,
    txt: "order added",
    data: response,
  });
};

let orderView = async (req, res) => {
  const db = await connect();
  const response = await db.collection("movies").findOne({
    title: "The Great Train Robberys",
    year: 1903,
  });

  return res.send({
    status: 0,
    data: response,
  });
};

let orderEdit = async (req, res) => {
  const db = await connect();
  const response = await db.collection("movies").updateOne({
    title: "The Great Train Robbery",
  });

  return res.send({
    status: 0,
    data: response,
  });
};

export { orderAdd, orderEdit, orderView };
