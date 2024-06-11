const mongoose = require('mongoose');

const Product = require('./models/product');

const url = process.env.URL;

mongoose.connect(url).then(() => {
  console.log('Connected to database!')
}).catch(() => {
  console.log('Connection failed!')
});

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price
  });
  const result = await createdProduct.save();

  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec(); //array returned by default. .exec() added to convert action into a promise
  res.json(products);
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;