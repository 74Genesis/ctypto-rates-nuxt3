import { MongoClient } from "mongodb";
let client;

console.log("---- TRY TO CONNECT ----");
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.0gezr.mongodb.net/?authMechanism=DEFAULT`;
try {
  client = new MongoClient(uri);
} catch (e: any) {
  console.log("CONNECTING ERROR", e);
}

export default client;
