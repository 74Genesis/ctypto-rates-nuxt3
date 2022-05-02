import bcrypt from "bcrypt";
import loadDb from "~/server/_api/db/db";
import jwt from "jsonwebtoken";
import EmailValidator from "~/logic/Form/validator/EmailValidator";
import PasswordValidator from "~/logic/Form/validator/PasswordValidator";
import authMiddleware from "~/server/_api/middleware/auth.js";
import mongoose from "mongoose";
const emailValid = new EmailValidator("email");
const passValid = new PasswordValidator("password");

/*
 * Fast written simple auth api
 * */

// Signup
export function signup(app: any) {
  app.post("/api/signup", async (req: any, res: any, next: any) => {
    // return error if fields not valid
    if (
      !emailValid.isValid(req.body?.email) ||
      !passValid.isValid(req.body?.password)
    ) {
      return res.json({
        success: false,
        error: "form is not valid",
      });
    }

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
export function login(app: any) {
  app.post("/api/login", async (req: any, res: any, next: any) => {
    // validate email and password
    if (
      !emailValid.isValid(req.body?.email) ||
      !passValid.isValid(req.body?.password)
    ) {
      return res.json({
        success: false,
        error: "form is not valid",
      });
    }

    // find an user by email and password
    let user;
    const userSchema = new mongoose.Schema(
      {
        name: String,
        password: String,
        token: String,
      },
      { collection: "Users" }
    );
    const Users = mongoose.model("Users", userSchema, "Users");
    try {
      const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.0gezr.mongodb.net/CryptoRates?authMechanism=DEFAULT`;
      await mongoose.connect(uri);
      const u = await Users.find({ name: req.body?.email });
      if (u[0]) user = u[0];
    } catch (e: any) {
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
      await Users.findOneAndUpdate({ name: req.body?.email }, { token });
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
export function userInfo(app: any) {
  app.get("/api/user", authMiddleware, function (req: any, res: any) {
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
export default defineEventHandler(() => undefined);
