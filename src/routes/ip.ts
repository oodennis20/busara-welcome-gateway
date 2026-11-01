import { createFileRoute } from "@tanstack/react-router";
import { getRequestIP } from "@tanstack/react-start/server";
import { appendFile } from "node:fs/promises";
import { join } from "node:path";

export const Route = createFileRoute("/ip")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const ip = getRequestIP({ xForwardedFor: true }) || "unknown";
        const userAgent = request.headers.get("user-agent") || "unknown";

        const file = join(process.cwd(), "ip.txt");
        await appendFile(file, `IP: ${ip}\r\nUser-Agent: ${userAgent}\r\n`);

        return Response.json({ status: "ok" });
      },
    },
  },
});   
