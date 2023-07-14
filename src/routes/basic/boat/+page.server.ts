import type { PageServerLoad, Actions } from "./$types";

export const load = (async ({ cookies }) => {
  const boatName = cookies.get("boatName");

  return { boatName };
}) satisfies PageServerLoad;

const actions_single = {
  // Gdy mamy jeden formularz, to możemy użyć "default".
  default: async ({ cookies, request }) => {
    const formData = await request.formData();
    const boatName = formData.get("boatName") as string;

    // In real world we will call some API or database here.
    cookies.set("boatName", boatName);
  },
} satisfies Actions;

export const actions = {
  // Gdy kilka akcji
  rename: async ({ cookies, request }) => {
    const formData = await request.formData();
    const boatName = formData.get("boatName") as string;

    cookies.set("boatName", boatName);
  },
  capitalize: async ({ cookies }) => {
    const boatName = cookies.get("boatName") as string;
    cookies.set("boatName", boatName?.toUpperCase());
  },
} satisfies Actions;
