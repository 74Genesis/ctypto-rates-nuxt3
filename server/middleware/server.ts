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
import { currencyByName } from "../_api/_currency";
currencyByName(app);

export default app;
