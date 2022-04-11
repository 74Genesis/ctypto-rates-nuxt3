// import { defineEventHandler } from "h3";
// import { MongoClient } from "mongodb";
//
// const url =
//   "mongodb+srv://itsdev74:jnWEe6vWueq0riei@cluster0.0gezr.mongodb.net/test";
// const client = new MongoClient(url);
//
// const createUser = async function () {
//   try {
//     await client.connect();
//
//     const res = await client.db("CryptoRates").collection("Users").insertOne({
//       name: "User",
//       password: "asdjflaf",
//       token: "adsfasdf",
//     });
//     console.log(res);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// };
//
// export default defineEventHandler(async (event) => {
//   // console.log(event);
//   await createUser();
//   return {
//     api: "works",
//   };
// });
// "failed to connect to server [localhost:27017] on first connect [Error: connect ECONNREFUSED 127.0.0.1:27017\n at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1144:16)\n at TCPConnectWrap.callbackTrampoline (internal/async_hooks.js:126:14) {\n name: 'MongoNetworkError',\n errorLabels: [Array],\n [Symbol(mongoErrorContextSymbol)]: {}\n}]"