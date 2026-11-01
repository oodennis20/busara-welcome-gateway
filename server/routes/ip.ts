import { defineEventHandler, getHeader } from "h3";
import { appendFile } from "node:fs/promises";
import { join } from "node:path";

export default defineEventHandler(async (event) => {
  const forwarded = getHeader(event, "x-forwarded-for");
  const realIp = getHeader(event, "x-real-ip");
  const ip = forwarded?.split(",")[0]?.trim() || realIp || "unknown";
  const userAgent = getHeader(event, "user-agent") || "unknown";

  const file = join(process.cwd(), "ip.txt");
  await appendFile(file, `IP: ${ip}\r\nUser-Agent: ${userAgent}\r\n`);

  return { status: "ok" };
});   
