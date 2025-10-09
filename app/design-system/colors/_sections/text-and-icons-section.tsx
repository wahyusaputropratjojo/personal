import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function TextAndIconsSection() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <h1 className="text-heading-24 lg:text-heading-32">Text and Icons</h1>
        <p className="text-pretty text-copy-14 text-gray-900 lg:text-copy-16">
          These two colors are designed for accessible text and icons.
        </p>
      </div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="w-6">
              <div className="size-6 rounded-full border border-gray-400 bg-gray-900" />
            </TableCell>
            <TableCell>Color 9</TableCell>
            <TableCell className="text-right text-gray-900">
              Secondary text and icons
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-6">
              <div className="size-6 rounded-full border border-gray-400 bg-gray-1000" />
            </TableCell>
            <TableCell>Color 10</TableCell>
            <TableCell className="text-right text-gray-900">
              Primary text and icons
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
