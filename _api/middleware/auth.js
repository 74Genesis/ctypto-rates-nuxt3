import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import loadDb from "../db/db.js";

/*
 * User auth middleware
 * checks if user has a valid token
 * */
export default async (req, res, next) => {
  const auth = req?.headers?.authorization;
  let token;
  let user;

  if (auth) {
    token = String(auth).split(" ").pop();
  }

  if (token) {
    const payload = jwt.verify(token, process.env.SECRET || "");

    try {
      const db = await loadDb();
      if (typeof payload === "object") {
        user = await db
          .collection("Users")
          .findOne({ _id: new ObjectId(payload?.id) });
      }
    } catch (e) {
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
