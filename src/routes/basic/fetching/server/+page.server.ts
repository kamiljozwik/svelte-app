import type { PageServerLoad } from "./$types";

export const load = (async () => {
  // data fetching / access .env / use raw sql / access files. Only on server side.

  return {
    name: "server",
    title: "Server Page",
  };
}) satisfies PageServerLoad;
