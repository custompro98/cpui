import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Tbody({ children }: Props) {
  return <tbody>{children}</tbody>;
}
