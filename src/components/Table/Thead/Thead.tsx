import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Thead({ children }: Props) {
  return (
    <thead className="h-10 bg-black text-white">
      <tr>{children}</tr>
    </thead>
  );
}
