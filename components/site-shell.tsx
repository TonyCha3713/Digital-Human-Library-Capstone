"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { footerLinks, navItems } from "@/lib/site-data";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-3 md:px-8">
          <Link className="focus-ring rounded-md" href="/">
            <span className="block rounded-lg bg-[var(--dark-blue)] px-3 py-2 text-sm font-bold tracking-wide text-white">
              dHL
            </span>
          </Link>
          <nav className="hidden flex-1 flex-wrap items-center gap-1 text-sm lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  className={`focus-ring rounded-full px-3 py-2 transition ${
                    active
                      ? "bg-[var(--dark-blue)] text-white"
                      : "text-[var(--ink)] hover:bg-[#edf5fa]"
                  }`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <select
              aria-label="Select language"
              className="focus-ring rounded-full border border-[var(--grey)] bg-white px-3 py-2 text-xs text-[var(--ink)]"
              defaultValue="EN"
            >
              <option>EN</option>
              <option>FR</option>
              <option>ES</option>
            </select>
            <button className="focus-ring rounded-full border border-[var(--bright-blue)] px-3 py-2 text-xs font-semibold text-[var(--dark-blue)]">
              Login / SSO
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="mt-20 border-t border-[var(--grey)] bg-white">
        <div className="section-shell grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-2xl text-[var(--dark-blue)]">Digital Human Library</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              77 Kittridge Ave. E., Strathroy, ON., Canada, N7G 2A9
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              joinus@digitalhumanlibrary.com
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {footerLinks.map((item) => (
              <Link
                className="focus-ring rounded px-1 py-1 text-[var(--ink)] hover:text-[var(--dark-blue)]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="font-semibold text-[var(--dark-blue)]">Follow Us</p>
            <p className="mt-2 text-sm text-[var(--muted)]">LinkedIn: Digital Human Library</p>
            <p className="text-sm text-[var(--muted)]">Facebook: Digital Human Library</p>
          </div>
        </div>
      </footer>
    </>
  );
}
