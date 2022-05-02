import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.0gezr.mongodb.net/?authMechanism=DEFAULT`;
let client: any;
try {
  client = new MongoClient(uri);
} catch (e) {
  console.log("CLIENT CREATE ERROR------------------", e);
}

let db: any;

const loadDB = async () => {
  if (db) {
    return db;
  }
  try {
    console.log("---- CONNECT TO -----", uri);
    await client.connect();
    db = client.db("CryptoRates");
  } catch (err: any) {
    console.log("CONNECT ERROR ---", err);
  }
  return db;
};

export default loadDB;
