import express from "express";
import { auth } from "express-oauth2-jwt-bearer";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const checkJwt = auth({
  audience: "crypto-rates",
  issuerBaseURL: `https://dev-r-y-lotj.us.auth0.com/`,
});

app.get("/authentication", (req, res) => {
  return res.json({
    auth: true,
  });
});
// This route doesn't need authentication
app.get("/api/public", function (req, res) {
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
