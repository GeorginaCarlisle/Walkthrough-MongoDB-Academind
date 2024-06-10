const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://firstuser:Q60lMT1HElo@letslearn.ckbhttu.mongodb.net/?retryWrites=true&w=majority&appName=LetsLearn';

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    proce: req.body.price
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('products').insertOne(newProduct);
  } catch (error) {
    return res.json({message: 'Could not store data.'});
  };
  setTimeout(()=>{
    client.close();
  }, 1500);
  res.json(newProduct);
};

const getProducts = async (req, res, next) => {

};

exports.createProduct = createProduct;
exports.getProducts = getProducts;