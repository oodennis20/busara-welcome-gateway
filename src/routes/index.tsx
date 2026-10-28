import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BusaraHub — Sign In" },
      { name: "description", content: "Sign in to your BusaraHub account." },
      { property: "og:title", content: "BusaraHub — Sign In" },
      {
        property: "og:description",
        content: "Sign in to your BusaraHub account.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "BusaraHub — Sign In" },
      {
        name: "twitter:description",
        content: "Sign in to your BusaraHub account.",
      },
    ],
  }),
  component: SignInPage,
});

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-start justify-center bg-login-bg px-4 pt-[116px] pb-24">
      <div className="w-full max-w-[360px] bg-card px-[45px] pt-[80px] pb-[110px] shadow-card">
        <h1 className="text-center text-[41px] font-black leading-none tracking-tight">
          <span className="text-primary">Busara</span>
          <span className="text-logo-muted">Hub</span>
        </h1>
        <p className="mt-[30px] text-center text-[14px] font-normal uppercase leading-none tracking-[2px] text-signin-heading">
          Sign in to your account
        </p>

        <form className="mt-[38px]" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label
              htmlFor="email"
              className="block text-[12px] leading-none text-label-green"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="mt-[5px] block h-[30px] w-full rounded-[4px] border border-border bg-input-gray px-[14px] text-[12px] text-foreground transition-shadow placeholder:text-logo-muted focus:border-input-blue focus:bg-card focus:shadow-input-focus focus:outline-none"
            />
          </div>

          <div className="mt-[26px]">
            <label
              htmlFor="password"
              className="block text-[12px] leading-none text-label-green"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="mt-[5px] block h-[30px] w-full rounded-[4px] border border-border bg-input-gray px-[14px] text-[12px] text-foreground transition-shadow placeholder:text-logo-muted focus:border-input-blue focus:bg-card focus:shadow-input-focus focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-[32px] block h-[45px] w-full rounded-[4px] bg-primary text-[13px] font-normal uppercase tracking-[1px] text-primary-foreground shadow-signin transition-colors hover:bg-primary/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-input-blue"
          >
            Sign In
          </button>

          <div className="mt-[31px] text-right">
            <a href="#" className="text-[13px] leading-none text-link-cyan hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
