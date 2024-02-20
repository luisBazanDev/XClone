import { Hono } from "hono";

const apiRouter = new Hono();

apiRouter.get("/:awa", async (c) => {
  c.json({ message: "Welcome to the API", version: "1.0-DEV" });
});

export default apiRouter;
