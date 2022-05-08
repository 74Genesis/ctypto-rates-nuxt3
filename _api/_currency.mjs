import authMiddleware from "./middleware/auth.mjs";
import { $fetch } from "ohmyfetch";

// currency info
function currencyByName(app) {
  app.get("/api/currency/:name", authMiddleware, async function (req, res) {
    let r;
    try {
      r = await $fetch(`https://api.coincap.io/v2/assets/${req.params.name}`);
      if (r && r.data) {
        return res.json({
          data: r.data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  });
}

// currency history
function currencyHistory(app) {
  app.get(
    "/api/currency/:name/history",
    authMiddleware,
    async function (req, res) {
      let r;
      try {
        const opts = { params: {} };

        if (req.query.interval) opts.params.interval = req.query.interval;
        if (req.query.start) opts.params.start = req.query.start;
        if (req.query.end) opts.params.end = req.query.end;

        r = await $fetch(
          `https://api.coincap.io/v2/assets/${req.params.name}/history`,
          opts
        );

        if (r && r.data) {
          return res.json({
            data: r.data,
          });
        }
      } catch (e) {
        console.log(e);
      }
      return res.json({
        data: 123,
      });
    }
  );
}

export default { currencyHistory, currencyByName };
