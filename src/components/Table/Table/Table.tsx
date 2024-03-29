import { ReactNode } from "react";
import Thead from "../Thead/Thead";
import Tbody from "../Tbody/Tbody";
import TCell from "../TCell/TCell";

interface Column {
  key: string;
  title: string;
  align?: "left" | "center" | "right";
}

interface Row {
  key: string | number;
  value: Record<string, ReactNode>;
}

interface Data {
  columns: Column[];
  rows: Row[];
}

interface Props {
  data: Data;
}

export default function Table({ data }: Props) {
  return (
    <table className="border border-black text-left shadow shadow-gray-300">
      <Thead>
        {data.columns.map((column) => (
          <TCell key={column.key} type="head" align={column.align}>
            {column.title}
          </TCell>
        ))}
      </Thead>
      <Tbody>
        {data.rows.map((row) => (
          <tr
            key={row.key}
            className="odd:bg-white even:bg-slate-200 hover:bg-slate-300"
          >
            {data.columns.map((column) => (
              <TCell
                key={`${row.key}-${column.key}`}
                type="body"
                align={column.align}
              >
                {row.value[column.key]}
              </TCell>
            ))}
          </tr>
        ))}
      </Tbody>
    </table>
  );
}
