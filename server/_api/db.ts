import { MongoClient } from "mongodb";

const uri: any = process.env.MONGO_URL;
const client = new MongoClient(uri);

export default client;

/*export async function connectDb() {
  try {

  } finally {
    await client.close();
  }
}
*/
