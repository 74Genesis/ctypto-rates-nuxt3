import express from "express";
import { $fetch } from "ohmyfetch";
import { auth } from "express-oauth2-jwt-bearer";
import EmailValidator from "~/logic/Form/validator/EmailValidator";
import PasswordValidator from "~/logic/Form/validator/PasswordValidator";

/*
 * Fast written simple auth api
 * */

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const checkJwt = auth({
  audience: "crypto-rates",
  issuerBaseURL: process.env.AUTH0_DOMAIN,
});

app.post("/api/signup", async (req, res) => {
  const emailValid = new EmailValidator("email");
  const passValid = new PasswordValidator("password");

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

  try {
    const r = await $fetch(process.env.AUTH0_DOMAIN + "/dbconnections/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        client_id: process.env.AUTH0_CLIENT_ID,
        email: req.body?.email,
        password: req.body?.password,
        connection: "Username-Password-Authentication",
      },
    });
    return res.json({
      success: true,
    });
  } catch (e) {
    return res.json({
      success: false,
      error: "Sorry, user with this email already exists",
    });
  }
});


// This route doesn't need authentication
app.get("/api/login", function (req, res) {
  res.json({
    message:
      "Hello from a public endpoint! You don't need to be authenticated to see this.",
  });
});

// This route needs authentication
app.get("/api/private", checkJwt, function (req, res) {
  res.json({
    message:
      "Hello from a private endpoint! You need to be authenticated to see this.",
  });
});

export default app;
