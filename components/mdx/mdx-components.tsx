import Link from "next/link";

import { Callout } from "@/components/mdx/callout";

export const mdxComponents = {
  a: ({
    href = "#",
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href.startsWith("/");

    if (isInternal) {
      return (
        <Link href={href} className="underline decoration-[var(--border)] underline-offset-4" {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="underline decoration-[var(--border)] underline-offset-4"
        {...props}
      >
        {children}
      </a>
    );
  },
  Callout
};
