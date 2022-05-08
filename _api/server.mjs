import express from "express";
import cors from "cors";

const corsOptions = {
  origin: "*",
  headers: "*",
  methods: "*",
  // headers: "Origin, X-Requested-With, Content-Type, Accept",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();

app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Private-Network", "true");
  next();
});
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/some", function (req, res) {
  res.send({
    some: "bar2",
    mail: 123,
  });
});
app.get("/some", function (req, res) {
  res.send({
    some: "bar3",
  });
});

// User api
import userApi from "./_user.mjs";
userApi.signup(app);
userApi.login(app);
userApi.userInfo(app);

// Currencies api
import currencyApi from "./_currency.mjs";
currencyApi.currencyByName(app);
currencyApi.currencyHistory(app);

const port = 3030;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
