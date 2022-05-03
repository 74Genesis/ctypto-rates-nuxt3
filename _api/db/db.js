const { MongoClient } = require("mongodb");

let db;

const loadDB = async () => {
  if (db) {
    return db;
  }
  const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.0gezr.mongodb.net/?authMechanism=DEFAULT`;
  let client;
  try {
    client = new MongoClient(uri);
  } catch (e) {
    console.log(e);
  }
  try {
    await client.connect();
    db = client.db("CryptoRates");
  } catch (err) {
    console.log("CONNECT ERROR ---", err);
  }
  return db;
};

module.exports = loadDB;
