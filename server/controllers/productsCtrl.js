module.exports = {
  getProducts: (req, res) => {
    const db = req.app.get('db');
    db.get_products().then(products => {
      return res.status(200).send(products);
    });
  }
};
