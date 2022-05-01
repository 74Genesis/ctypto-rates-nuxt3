import { MongoClient } from "mongodb";
let client;

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.0gezr.mongodb.net/?authMechanism=DEFAULT`;
console.log("---- TRY TO CONNECT ----", uri);
try {
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (e: any) {
  console.log("CONNECTING ERROR", uri, e);
}

export default client;
