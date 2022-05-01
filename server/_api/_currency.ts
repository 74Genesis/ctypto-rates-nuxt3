import authMiddleware from "~/server/_api/middleware/auth";

// currency info
export function currencyByName(app: any) {
  app.get(
    "/api/currency/:name",
    authMiddleware,
    async function (req: any, res: any) {
      let r: any;
      try {
        r = await $fetch(`https://api.coincap.io/v2/assets/${req.params.name}`);
        if (r && r.data) {
          return res.json({
            data: r.data,
          });
        }
      } catch (e: any) {
        console.log(e);
      }
    }
  );
}

// currency history
export function currencyHistory(app: any) {
  app.get(
    "/api/currency/:name/history",
    authMiddleware,
    async function (req: any, res: any) {
      let r: any;
      try {
        const opts: Record<string, any> = { params: {} };

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
      } catch (e: any) {
        console.log(e);
      }
      return res.json({
        data: 123,
      });
    }
  );
}
