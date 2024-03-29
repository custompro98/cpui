import { ReactNode } from "react";
import { Heading } from "../Heading";

interface Props {
  title: ReactNode;
  content: ReactNode;
}

export default function Section({ title, content }: Props) {
  return (
    <>
      <Heading type="section">{title}</Heading>
      <article>{content}</article>
    </>
  );
}
