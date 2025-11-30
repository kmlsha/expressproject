let orderAdd = async (req, res) => {
  return res.send({
    status: 0,
    data: "order added",
  });
};

let orderView = async (req, res) => {
  return res.send({
    status: 0,
    data: "order viewed",
  });
};

let orderEdit = async (req, res) => {
  return res.send({
    status: 0,
    data: "order edited",
  });
};

export { orderAdd, orderEdit, orderView };
