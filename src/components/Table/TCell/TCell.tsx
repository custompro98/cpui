import assertNever from "@/utility/assert-never";
import { ReactNode } from "react";

interface Props {
  type: "head" | "body";
  children: ReactNode;
}

export default function TCell({ type, children }: Props) {
  switch (type) {
    case "head":
      return <th className="p-2">{children}</th>;
    case "body":
      return <td className="p-2">{children}</td>;
    default:
      assertNever(type);
  }
}
