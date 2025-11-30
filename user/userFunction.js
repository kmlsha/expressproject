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
  return res.send({
    status: 0,
    data: "user edited",
  });
};

export { userAdd, userEdit, orderView };
