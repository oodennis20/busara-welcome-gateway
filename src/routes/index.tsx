import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "../assets/busara-logo.png.asset.json";

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
    <div className="flex min-h-screen items-start justify-center bg-login-bg px-4 pt-[116px] pb-[15px]">
      <div className="w-full max-w-[360px] bg-card px-[45px] pt-[93px] pb-[60px] shadow-card">
        <img
          src={logoAsset.url}
          alt="BusaraHub"
          width={221}
          height={33}
          className="mx-auto block h-[33px] w-[221px]"
        />
        <p className="mt-[42px] text-center text-[14px] font-light uppercase leading-none tracking-[1.25px] text-signin-heading">
          Sign in to your account
        </p>

        <form className="mt-[41px]" onSubmit={(event) => event.preventDefault()}>
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
              className="mt-[10px] block h-[30px] w-full rounded-[4px] border border-border bg-input-gray px-[14px] text-[12px] text-foreground transition-shadow placeholder:text-logo-muted focus:border-input-blue focus:bg-card focus:shadow-input-focus focus:outline-none"
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
              className="mt-[10px] block h-[30px] w-full rounded-[4px] border border-border bg-input-gray px-[14px] text-[12px] text-foreground transition-shadow placeholder:text-logo-muted focus:border-input-blue focus:bg-card focus:shadow-input-focus focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-[31px] block h-[45px] w-full rounded-[4px] bg-primary text-[13px] font-normal uppercase tracking-[1px] text-primary-foreground shadow-signin transition-colors hover:bg-primary/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-input-blue"
          >
            Sign In
          </button>

          <div className="mt-[23px] text-right">
            <a href="#" className="text-[13px] leading-none text-link-cyan hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
