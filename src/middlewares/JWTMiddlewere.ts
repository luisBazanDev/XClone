import { verify } from "hono/jwt";
import { getCookie } from "hono/cookie";
import { JWT_SECRET } from "../config";
import type { MiddlewareHandler } from "hono";

export default (): MiddlewareHandler => {
  return async function middleware(c, next) {
    const token = getCookie(c, "token");
    if (token === undefined) {
      return new Response("Unauthorized", {
        status: 401,
      });
    } else {
      try {
        await verify(token, JWT_SECRET);
        await next();
        return;
      } catch (error: any) {
        return new Response("Unauthorized", {
          status: 401,
        });
      }
    }
  };
};
