let refundStatus = async (req, res) => {
  let orderId = req.query.orderId;

  if (orderId) {
  }

  return res.send({
    status: 0,
    data: null,
  });
};

export { refundStatus };
