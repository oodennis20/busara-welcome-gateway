import { createFileRoute } from "@tanstack/react-router";
import { appendFile } from "node:fs/promises";
import { join } from "node:path";

async function GET({ request }: { request: Request }) {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ip = forwarded?.split(",")[0]?.trim() || realIp || "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";

  const file = join(process.cwd(), "ip.txt");
  await appendFile(file, `IP: ${ip}\r\nUser-Agent: ${userAgent}\r\n`);

  return Response.json({ status: "ok" });
}

export const Route = createFileRoute("/ip")({
  server: { handlers: { GET } },
});   
