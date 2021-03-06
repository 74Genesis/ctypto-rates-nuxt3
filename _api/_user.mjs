import dotenv from "dotenv";
import path from "path";
const __dirname = path.resolve();
dotenv.config({ path: path.resolve(__dirname, ".env") });
import authMiddleware from "./middleware/auth.mjs";
import bcrypt from "bcrypt";
import loadDb from "./db/db.mjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import UserModel from "./models/UserModel.mjs";

/*
 * Fast written simple auth api
 * */

// Signup
function signup(app) {
  app.post("/api/signup", async (req, res, next) => {
    // return error if fields not valid

    const db = await loadDb();

    // make password hash
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body?.password, salt);

    // create new user in db
    const user = await db.collection("Users").insertOne({
      name: req.body?.email,
      password: hash,
      token: "",
    });

    return res.json({
      success: true,
      data: user,
    });
  });
}

// Login
function login(app) {
  app.post("/api/login", async (req, res, next) => {
    // find an user by email and password
    let user;
    try {
      console.log("MONGO ----", process.env.MONGO_URL);
      console.log("MONGO ----", path.resolve(__dirname, ".env"));
      const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.0gezr.mongodb.net/CryptoRates?authMechanism=DEFAULT`;
      await mongoose.connect(uri);
      const u = await UserModel.find({ name: req.body?.email });
      if (u[0]) user = u[0];
    } catch (e) {
      console.log(e);
      return res.json({
        success: false,
        error: e.message,
      });
    }

    // user not found
    if (!user) {
      return res.json({
        success: false,
        error: "Wrong username or password",
      });
    }

    // generate token and return user data
    if (bcrypt.compareSync(req.body?.password, user.password)) {
      // generate token
      const token = jwt.sign(
        { id: String(user._id) },
        process.env.SECRET || ""
      );

      // save token to db
      await UserModel.findOneAndUpdate({ name: req.body?.email }, { token });
      // await db
      //   .collection("Users")
      //   .updateOne({ name: req.body?.email }, { $set: { token } });

      res.json({
        success: true,
        user,
        token,
      });
    } else {
      return res.json({
        success: false,
        error: "Wrong username or password",
      });
    }
  });
}

// Get user info
function userInfo(app) {
  app.get("/api/user", authMiddleware, function (req, res) {
    if (req.user) {
      const rUser = Object.assign({}, req.user);
      delete rUser.password;
      delete rUser.token;
      res.json({
        success: true,
        data: rUser,
      });
    }

    res.json({
      success: false,
      message: req.errorMsg,
    });
  });
}

export default { signup, login, userInfo };
