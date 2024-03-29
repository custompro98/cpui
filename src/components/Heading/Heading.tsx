import { ReactNode } from "react";
import assertNever from "@/utility/assert-never";

interface Props {
  children: ReactNode;
  type: "primary" | "secondary" | "section";
}

export default function Heading({ children, type }: Props) {
  switch (type) {
    case "primary":
      return (
        <h1 className={`font-serif text-3xl font-extrabold`}>{children}</h1>
      );
    case "secondary":
      return <h2 className="pb-8 font-serif text-2xl font-bold">{children}</h2>;
    case "section":
      return (
        <h3 className="pb-4 font-serif text-xl font-semibold">{children}</h3>
      );
    default:
      assertNever(type);
  }
}
