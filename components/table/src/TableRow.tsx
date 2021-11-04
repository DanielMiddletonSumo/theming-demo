interface TableRowProps {
  row: string[];
}

export const TableRow = ({ row }: TableRowProps) => {
  return (
    <tr>
      {row.map(field => (
        <td key={field}>{field}</td>
      ))}
    </tr>
  );
};
