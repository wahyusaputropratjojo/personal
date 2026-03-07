import { loadEnvFile } from "node:process";
import type { ZodError } from "zod";
import { z } from "zod";

loadEnvFile();

const ENVSchema = z.object({
  AUTHOR_EMAIL: z.string(),
  AUTHOR_USERNAME: z.string(),
  AUTHOR_PASSWORD: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
  MONGODB_USERNAME: z.string(),
  MONGODB_PASSWORD: z.string(),
  MONGODB_URI: z.string(),
});

let env: z.infer<typeof ENVSchema>;

try {
  env = ENVSchema.parse(process.env);
} catch (e) {
  const error = e as ZodError;
  console.error(z.flattenError(error).fieldErrors);
  process.exit(1);
}

export default env;
