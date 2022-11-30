import Link, { LinkProps } from "next/link";
import { FC, HTMLProps, PropsWithChildren } from "react";

interface Props
  extends Omit<LinkProps & HTMLProps<HTMLAnchorElement>, "href">,
    PropsWithChildren {
  href?: string;
}

const LinkOrFragmentWrapper: FC<Props> = ({ href, children }) => {
  return href ? (
    <Link href={href} passHref style={{ textDecoration: "none" }}>
      {children}
    </Link>
  ) : (
    <>{children}</>
  );
};

export default LinkOrFragmentWrapper;
