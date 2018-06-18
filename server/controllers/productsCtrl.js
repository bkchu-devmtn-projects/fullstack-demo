module.exports = {
  getProductById: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    db.get_product_by_id([id]).then(product => {
      return res.status(200).send(product);
    });
  }
};
