import { MDXContent } from "@content-collections/mdx/react";

import { mdxComponents } from "@/components/mdx/mdx-components";

type MdxContentProps = {
  code: string;
};

export function MdxContent({ code }: MdxContentProps) {
  return <MDXContent code={code} components={mdxComponents} />;
}
