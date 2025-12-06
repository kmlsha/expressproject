import { connect } from "../mongodb.js";

let userAdd = async (req, res) => {
  const db = await connect();
  const response = await db.collection("movies").insertOne({
    title: "The Great Train Robberys",
    year: 1903,
  });
  return res.send({
    status: 0,
    txt: "user added",
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

let userEdit = async (req, res) => {
  const db = await connect();
  const response = await db.collection("movies").updateOne({
    title: "The Great Train Robbery",
  });

  return res.send({
    status: 0,
    data: response,
  });
};

export { userAdd, userEdit, orderView };
