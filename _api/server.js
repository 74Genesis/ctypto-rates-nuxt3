import express from "express";
import cors from "cors";
// import EmailValidator from "../logic/Form/validator/EmailValidator";
// import PasswordValidator from "../logic/Form/validator/PasswordValidator";

const corsOptions = {
  origin: "*",
  headers: "Origin, X-Requested-With, Content-Type, Accept",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Private-Network", "true");
  next();
});
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const emailValid = new EmailValidator("email");
// const passValid = new PasswordValidator("password");

app.get("/api/some", function (req, res) {
  res.send({
    some: "bar2",
  });
});
app.get("/some", function (req, res) {
  res.send({
    some: "bar3",
  });
});

// // User api
// const userApi = require("./_user");
// userApi.signup(app);
// userApi.login(app);
// userApi.userInfo(app);
//
// // Currencies api
// import currencyApi from "./_currency";
// currencyApi.currencyByName(app);
// currencyApi.currencyHistory(app);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
