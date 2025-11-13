let refundView = async (req, res) => {
  let vla = "";
  if (req.query.data == "ss") {
    vla = "kk";
  }

  return res.send({
    status: 0,
    data: vla,
  });
};

export { refundView };
