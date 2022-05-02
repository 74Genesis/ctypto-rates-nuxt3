import { MongoClient } from "mongodb";

let db: any;

const loadDB = async () => {
  if (db) {
    return db;
  }
  const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.0gezr.mongodb.net/?authMechanism=DEFAULT`;
  let client: any;
  console.log("before client create------------------------");
  try {
    console.log("TRY CREATE CLIENT---------------------------------");
    client = new MongoClient(uri);
    console.log("CLIENT", client);
  } catch (e) {
    console.log("CLIENT CREATE ERROR------------------", e);
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
