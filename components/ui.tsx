import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[var(--orange)] text-white hover:bg-[#e68410]"
      : "bg-white text-[var(--dark-blue)] border border-[var(--bright-blue)] hover:bg-[#eff8fc]";

  const base = `focus-ring inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition ${styles} ${className}`;

  if (href) {
    return (
      <Link className={base} href={href}>
        {children}
      </Link>
    );
  }

  return <button className={base}>{children}</button>;
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <article className={`dhl-card p-6 ${className}`}>{children}</article>;
}

export function Input({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      className="focus-ring h-11 w-full rounded-full border border-[var(--grey)] bg-white px-4 text-sm text-[var(--ink)] placeholder:text-[var(--muted)]"
      placeholder={placeholder}
      type={type}
    />
  );
}
