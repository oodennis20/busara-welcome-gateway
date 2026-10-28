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
    <div className="flex min-h-screen items-center justify-center bg-login-bg px-4 py-10">
      <div className="w-full max-w-[356px] bg-card px-10 pb-14 pt-20 shadow-card">
        <h1 className="text-center text-[34px] font-black leading-none tracking-tight">
          <span className="text-primary">Busara</span>
          <span className="text-logo-muted">Hub</span>
        </h1>
        <p className="mt-7 text-center text-[15px] font-light uppercase tracking-[0.18em] text-signin-heading">
          Sign in to your account
        </p>

        <form className="mt-10" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label htmlFor="email" className="block text-sm text-label-green">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="mt-2 block w-full rounded-[4px] border border-border bg-card px-3 py-[9px] text-sm text-foreground transition-shadow placeholder:text-muted-foreground/70 focus:border-input-blue focus:shadow-input-focus focus:outline-none"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="password"
              className="block text-sm text-label-green"
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
              className="mt-2 block w-full rounded-[4px] border border-border bg-input-gray px-3 py-[9px] text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-input-blue focus:shadow-input-focus focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-7 w-full rounded-[4px] bg-primary py-3 text-sm font-medium uppercase tracking-[0.08em] text-primary-foreground shadow-signin transition-colors hover:bg-primary/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-input-blue"
          >
            Sign In
          </button>

          <div className="mt-6 text-right">
            <a href="#" className="text-sm text-link-cyan hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
