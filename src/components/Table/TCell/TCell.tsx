import assertNever from "@/utility/assert-never";
import classnames from "classnames";
import { ReactNode } from "react";

interface Props {
  type: "head" | "body";
  children: ReactNode;
  align?: "left" | "center" | "right";
}

export default function TCell({ type, children, align }: Props) {
  const classes = classnames({
    "p-2": true,
    "text-left": !align || align === "left",
    "text-center": align === "center",
    "text-right": align === "right",
  });

  switch (type) {
    case "head":
      return <th className={classes}>{children}</th>;
    case "body":
      return <td className={classes}>{children}</td>;
    default:
      assertNever(type);
  }
}
