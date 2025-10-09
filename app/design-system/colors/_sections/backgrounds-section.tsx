import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function BackgroundsSection() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <h1 className="text-heading-24 lg:text-heading-32">Backgrounds</h1>
        <p className="text-pretty text-copy-14 text-gray-900 lg:text-copy-16">
          There are two background colors for pages and UI components. In most
          instances, you should use Background 1—especially when color is being
          placed on top of the background. Background 2 should be used sparingly
          when a subtle background differentiation is needed.
        </p>
      </div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="w-6">
              <div className="size-6 rounded-full border border-gray-400 bg-background-100" />
            </TableCell>
            <TableCell>Background 1</TableCell>
            <TableCell className="text-right text-gray-900">
              Default element background
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-6">
              <div className="size-6 rounded-full border border-gray-400 bg-background-200" />
            </TableCell>
            <TableCell>Background 2</TableCell>
            <TableCell className="text-right text-gray-900">
              Secondary background
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
