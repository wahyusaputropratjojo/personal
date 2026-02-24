import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "$lib/server/db";
import { BETTER_AUTH_URL } from "$env/static/private";

export const auth = betterAuth({
  baseURL: BETTER_AUTH_URL,
  database: mongodbAdapter(client.db(), { client }),
  emailAndPassword: {
    enabled: true,
  },
});
