import { error, json } from "@sveltejs/kit";
import type { RequestEvent, RequestHandler } from "./$types";

export const GET: RequestHandler = async (e: RequestEvent) => {
  e.cookies;
  e.params;
  e.request.body;

  // fetch from BE and inherits client headers and cookies.
  e.fetch("https://example.com");

  const user = { admin: Math.random() > 0.5 };

  if (!user.admin) {
    // error helper
    throw error(401, "Unauthorized");
  }

  // return new Response();

  // json helper
  return json({ message: "Hello world!" });
};
