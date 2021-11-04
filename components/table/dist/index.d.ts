export interface TableData {
  headers?: string[];
  rows: string[][];
}
interface TableProps {
  data: TableData;
}
export declare const Table: ({
  data: { headers, rows },
}: TableProps) => import('@emotion/react/types/jsx-namespace').EmotionJSX.Element;
export {};
