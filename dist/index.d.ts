import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare interface Column {
    key: string;
    title: string;
    align?: "left" | "center" | "right";
}

declare interface Data {
    columns: Column[];
    rows: Row[];
}

export declare function Heading({ children, type }: Props): JSX_2.Element;

declare interface Props {
    children: ReactNode;
    type: "primary" | "secondary" | "section";
}

declare interface Props_2 {
    title: ReactNode;
    content: ReactNode;
}

declare interface Props_3 {
    data: Data;
}

declare interface Row {
    key: string | number;
    value: Record<string, ReactNode>;
}

export declare function Section({ title, content }: Props_2): JSX_2.Element;

export declare function Table({ data }: Props_3): JSX_2.Element;

export { }
