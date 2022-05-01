import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/ap/some", function (req: any, res: any) {
  return res.json({
    some: "bar",
  });
});

// User api
import { signup, login, userInfo } from "../_api/_user";
signup(app);
login(app);
userInfo(app);

// Currencies api
import { currencyByName, currencyHistory } from "../_api/_currency";
currencyByName(app);
currencyHistory(app);

export default app;
