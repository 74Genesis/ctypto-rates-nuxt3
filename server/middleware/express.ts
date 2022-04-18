import express from "express";
import bcrypt from "bcrypt";
import client from "~/server/db";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import EmailValidator from "~/logic/Form/validator/EmailValidator";
import PasswordValidator from "~/logic/Form/validator/PasswordValidator";
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
  const user = await db.collection("Users").findOne({ name: req.body?.email });

  if (!user) {
    return res.json({
      success: false,
      error: "Wrong username or password",
    });
  }

  if (bcrypt.compareSync(req.body?.password, user.password)) {
    // generate token
    const token = jwt.sign({ id: String(user._id) }, process.env.SECRET);

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

const auth = async (req, res, next) => {
  const raw = String(req?.headers?.authorization.split(" ").pop());
  const { id } = jwt.verify(raw, process.env.SECRET);

  await client.connect();
  const db = await client.db("CryptoRates");
  req.user = await db.collection("Users").findOne({ _id: new ObjectId(id) });
  next();
};

// get user info
app.get("/api/user", auth, function (req, res) {
  if (req.user) {
    res.json({
      success: true,
      data: req.user,
    });
  }

  res.json({
    success: false,
    message: "User not found",
  });
});

export default app;
