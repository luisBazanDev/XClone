import { Hono } from "hono";
import { sign } from "hono/jwt";

const app = new Hono();

app.get("/:text", async (c) => {
  return c.json({
    token: await sign({ text: c.req.param("text") }, "jas"),
    env_test: process.env.test,
  });
});

export default app;
