import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function BordersSection() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <h1 className="text-heading-24 lg:text-heading-32">Borders</h1>
        <p className="text-pretty text-copy-14 text-gray-900 lg:text-copy-16">
          These three colors are designed for UI component borders.
        </p>
      </div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="w-6">
              <div className="size-6 rounded-full border border-gray-400 bg-gray-400" />
            </TableCell>
            <TableCell>Color 4</TableCell>
            <TableCell className="text-right text-gray-900">
              Default border
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-6">
              <div className="size-6 rounded-full border border-gray-400 bg-gray-500" />
            </TableCell>
            <TableCell>Color 5</TableCell>
            <TableCell className="text-right text-gray-900">
              Hover border
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-6">
              <div className="size-6 rounded-full border border-gray-400 bg-gray-600" />
            </TableCell>
            <TableCell>Color 6</TableCell>
            <TableCell className="text-right text-gray-900">
              Active border
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
