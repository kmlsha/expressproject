import dbClient from "../mongodb.js";

let userAdd = async (req, res) => {
  return res.send({
    status: 0,
    data: "user added",
  });
};

let orderView = async (req, res) => {
  return res.send({
    status: 0,
    data: "order viewed",
  });
};

let userEdit = async (req, res) => {
  let kk = null;
  try {
    await dbClient.connect(); // connects using MONGODB_URI or default
    kk = await dbClient.getDb().collection("movies").findOne({
      runtime: 11,
    });
  } catch (error) {
    console.error("Error in userEdit:", error);
  }

  return res.send({
    status: 0,
    data: "user edited",
    datas: kk,
  });
};

export { userAdd, userEdit, orderView };
