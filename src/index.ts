import { Hono } from "hono";
import { sign } from "hono/jwt";
import JWTMiddlewere from "./middlewares/JWTMiddlewere";
import { setCookie } from "hono/cookie";
import { JWT_SECRET } from "./config";

const app = new Hono();

app.get("/login/:text", async (c) => {
  const token = await sign({ text: c.req.param("text") }, JWT_SECRET);
  setCookie(c, "token", token);
  return c.json({
    token: token,
    env_test: process.env.test,
  });
});

app.get("/*", JWTMiddlewere(), async (c) => {
  return c.json({
    hello: "world",
  });
});

export default app;
