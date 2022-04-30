import authMiddleware from "~/server/_api/auth";

export function currencyByName(app: any) {
  app.get(
    "/api/currency/:name",
    authMiddleware,
    async function (req: any, res: any) {
      let r: any;
      // try {
      // r = await $fetch(`https://api.coincap.io/v2/assets/${req.params.name}`);
      // if (r && r.data) {
      //   console.log(r);
      // return res.json({
      //   data: r.data,
      // });
      // }
      // } catch (e: any) {
      //   console.log(e);
      // }
      return res.json({
        data: 123,
      });
    }
  );
}
