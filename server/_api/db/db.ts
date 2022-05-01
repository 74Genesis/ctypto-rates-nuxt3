import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.0gezr.mongodb.net/?authMechanism=DEFAULT`;
const client = new MongoClient(uri);

export default client;
