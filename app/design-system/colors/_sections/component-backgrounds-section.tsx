import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function ComponentBackgroundsSection() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <h1 className="text-heading-24 lg:text-heading-32">
          Component Backgrounds
        </h1>
        <p className="text-pretty text-copy-14 text-gray-900 lg:text-copy-16">
          These three colors are designed for UI component backgrounds.
        </p>
      </div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="w-6">
              <div className="size-6 rounded-full border border-gray-400 bg-gray-100" />
            </TableCell>
            <TableCell>Color 1</TableCell>
            <TableCell className="text-right text-gray-900">
              Default background
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-6">
              <div className="size-6 rounded-full border border-gray-400 bg-gray-200" />
            </TableCell>
            <TableCell>Color 2</TableCell>
            <TableCell className="text-right text-gray-900">
              Hover background
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-6">
              <div className="size-6 rounded-full border border-gray-400 bg-gray-300" />
            </TableCell>
            <TableCell>Color 3</TableCell>
            <TableCell className="text-right text-gray-900">
              Active background
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
