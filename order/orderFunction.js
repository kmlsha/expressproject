import { connect } from "../mongodb.js";

let orderAdd = async (req, res) => {
  let { item_name } = req.body;
  if (!item_name) {
    return res.send({
      status: 1,
      txt: "item name is required",
    });
  }
  const db = await connect();
  const response = await db.collection("orders").insertOne({
    item_name,
    status: "active",
  });
  return res.send({
    status: 0,
    txt: "order added",
    data: response,
  });
};

let orderView = async (req, res) => {
  let { item_name } = req.body;
  const db = await connect();
  const response = await db.collection("orders").findOne({
    item_name,
  });

  return res.send({
    status: 0,
    data: response,
  });
};

let orderEdit = async (req, res) => {
  const db = await connect();
  const response = await db.collection("orders").updateOne({
    item_name: req.body.item_name,
    status: "inactive",
  });

  return res.send({
    status: 0,
    data: response,
  });
};

export { orderAdd, orderEdit, orderView };
