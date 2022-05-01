import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.0gezr.mongodb.net/?authMechanism=DEFAULT`;

let db: any;

const loadDB = async () => {
  if (db) {
    return db;
  }
  try {
    console.log("---- CONNECT TO -----", uri);
    const client = await MongoClient.connect(uri);
    db = client.db("CryptoRates");
  } catch (err: any) {
    console.log("CONNECT ERROR ---", err);
  }
  return db;
};

export default loadDB;
