import jwt from "jsonwebtoken";
import client from "~/server/_api/db/db";
import { ObjectId } from "mongodb";

/*
 * User auth middleware
 * checks if user has a valid token
 * */
export default async (req: any, res: any, next: any) => {
  const auth = req?.headers?.authorization;
  let token;
  let user;

  if (auth) {
    token = String(auth).split(" ").pop();
  }

  if (token) {
    const payload = jwt.verify(token, process.env.SECRET || "");

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
    }
  }

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(403).json({ error: "You have no permissions" });
  }
};
