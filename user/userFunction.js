import { connect } from "../mongodb.js";

let userAdd = async (req, res) => {
  let { name, email } = req.body;
  if (!name) {
    return res.send({
      status: 1,
      txt: "name missing",
    });
  }
  const db = await connect();
  const response = await db.collection("users").insertOne({
    name,
    email,
  });
  return res.send({
    status: 0,
    txt: "user added",
    data: response,
  });
};

let usersView = async (req, res) => {
  let { name, email } = req.body;
  const db = await connect();
  const response = await db.collection("users").findOne({
    name,
    email,
  });

  return res.send({
    status: 0,
    data: response,
  });
};

let userEdit = async (req, res) => {
  let { name, email } = req.body;
  const db = await connect();
  const response = await db.collection("users").updateOne({
    name,
    email,
  });

  return res.send({
    status: 0,
    data: response,
  });
};

export { userAdd, userEdit, usersView };
