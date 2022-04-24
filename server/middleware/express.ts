import express from "express";
import bcrypt from "bcrypt";
import client from "~/server/db";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import EmailValidator from "~/logic/Form/validator/EmailValidator";
import PasswordValidator from "~/logic/Form/validator/PasswordValidator";
import cookieParser from "cookie-parser";
const emailValid = new EmailValidator("email");
const passValid = new PasswordValidator("password");

/*
 * Fast written simple auth api
 * */
//TODO: Нормальное апи сделать

interface User {
  email: string;
  password: string;
  token: string;
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post("/api/signup", async (req, res, next) => {
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

  await client.connect();
  const db = await client.db("CryptoRates");

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body?.password, salt);

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

app.post("/api/login", async (req, res, next) => {
  console.log("Cookies: ", req.cookies);
  if (
    !emailValid.isValid(req.body?.email) ||
    !passValid.isValid(req.body?.password)
  ) {
    return res.json({
      success: false,
      error: "form is not valid",
    });
  }

  let user;
  let db;
  try {
    await client.connect();
    db = await client.db("CryptoRates");
    user = await db.collection("Users").findOne({ name: req.body?.email });
  } catch (e: any) {
    return res.json({
      success: false,
      error: e.message,
    });
  }

  if (!user) {
    return res.json({
      success: false,
      error: "Wrong username or password",
    });
  }

  if (bcrypt.compareSync(req.body?.password, user.password)) {
    // generate token
    const token = jwt.sign({ id: String(user._id) }, process.env.SECRET || "");

    // save token to db
    await db
      .collection("Users")
      .updateOne({ name: req.body?.email }, { $set: { token } });

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

const auth = async (req: any, res: any, next: any) => {
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
      user = await db
        .collection("Users")
        .findOne({ _id: new ObjectId(payload?.id) });
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

// get user info
app.get("/api/user", auth, function (req: any, res: any) {
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

export default app;
