import jwt from "jsonwebtoken";
import client from "~/server/_api/db";
import { ObjectId } from "mongodb";

/*
 * User auth middleware
 * checks if user has a valid token
 * */
export default async (req: any, res: any, next: any) => {
  const auth = req?.headers?.authorization;
  let token;
  let errorMsg;

  if (auth) {
    token = String(auth).split(" ").pop();
  }

  if (token) {
    const payload = jwt.verify(token, process.env.SECRET || "");
    let user;

    try {
      await client.connect();
      const db = await client.db("CryptoRates");
      if (typeof payload === "object") {
        user = await db
          .collection("Users")
          .findOne({ _id: new ObjectId(payload?.id) });
      }
    } catch (e: any) {
      console.log(e.message);
      errorMsg = e.message;
    }

    if (user) {
      req.user = user;
      next();
    }
  }

  req.errorMsg = errorMsg;
  next();
};
