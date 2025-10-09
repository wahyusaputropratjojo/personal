import type { ComponentProps } from "react";
import { cn } from "@/lib/utils/cn";

export function ScalesSection() {
  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h2 className="text-heading-24 lg:text-heading-32">Scales</h2>
        <p className="text-pretty text-copy-14 text-gray-900 lg:text-copy-16">
          Each color is available in a 10-step scale, from light to dark. These
          shades are designed to create depth, hierarchy, and express
          interactive states.
        </p>
      </div>

      <div className="grid gap-3">
        <div className="grid items-center gap-2 lg:grid-flow-col lg:grid-cols-7">
          <h3 className="text-heading-16 lg:col-span-1">Backgrounds</h3>
          <ul className="grid grid-cols-5 gap-2 sm:grid-cols-5 lg:col-span-6 lg:grid-cols-10">
            <ColorItem className="bg-background-100" />
            <ColorItem className="bg-background-200" />
          </ul>
        </div>

        <div className="grid items-center gap-2 lg:grid-flow-col lg:grid-cols-7">
          <h3 className="text-heading-16 lg:col-span-1">Gray</h3>
          <ul className="grid grid-cols-5 gap-2 sm:grid-cols-5 lg:col-span-6 lg:grid-cols-10">
            <ColorItem className="bg-gray-100" />
            <ColorItem className="bg-gray-200" />
            <ColorItem className="bg-gray-300" />
            <ColorItem className="bg-gray-400" />
            <ColorItem className="bg-gray-500" />
            <ColorItem className="bg-gray-600" />
            <ColorItem className="bg-gray-700" />
            <ColorItem className="bg-gray-800" />
            <ColorItem className="bg-gray-900" />
            <ColorItem className="bg-gray-1000" />
          </ul>
        </div>

        <div className="grid items-center gap-2 lg:grid-flow-col lg:grid-cols-7">
          <h3 className="text-heading-16 lg:col-span-1">Blue</h3>
          <ul className="grid grid-cols-5 gap-2 sm:grid-cols-5 lg:col-span-6 lg:grid-cols-10">
            <ColorItem className="bg-blue-100" />
            <ColorItem className="bg-blue-200" />
            <ColorItem className="bg-blue-300" />
            <ColorItem className="bg-blue-400" />
            <ColorItem className="bg-blue-500" />
            <ColorItem className="bg-blue-600" />
            <ColorItem className="bg-blue-700" />
            <ColorItem className="bg-blue-800" />
            <ColorItem className="bg-blue-900" />
            <ColorItem className="bg-blue-1000" />
          </ul>
        </div>

        <div className="grid items-center gap-2 lg:grid-flow-col lg:grid-cols-7">
          <h3 className="text-heading-16 lg:col-span-1">Red</h3>
          <ul className="grid grid-cols-5 gap-2 sm:grid-cols-5 lg:col-span-6 lg:grid-cols-10">
            <ColorItem className="bg-red-100" />
            <ColorItem className="bg-red-200" />
            <ColorItem className="bg-red-300" />
            <ColorItem className="bg-red-400" />
            <ColorItem className="bg-red-500" />
            <ColorItem className="bg-red-600" />
            <ColorItem className="bg-red-700" />
            <ColorItem className="bg-red-800" />
            <ColorItem className="bg-red-900" />
            <ColorItem className="bg-red-1000" />
          </ul>
        </div>

        <div className="grid items-center gap-2 lg:grid-flow-col lg:grid-cols-7">
          <h3 className="text-heading-16 lg:col-span-1">Amber</h3>
          <ul className="grid grid-cols-5 gap-2 sm:grid-cols-5 lg:col-span-6 lg:grid-cols-10">
            <ColorItem className="bg-amber-100" />
            <ColorItem className="bg-amber-200" />
            <ColorItem className="bg-amber-300" />
            <ColorItem className="bg-amber-400" />
            <ColorItem className="bg-amber-500" />
            <ColorItem className="bg-amber-600" />
            <ColorItem className="bg-amber-700" />
            <ColorItem className="bg-amber-800" />
            <ColorItem className="bg-amber-900" />
            <ColorItem className="bg-amber-1000" />
          </ul>
        </div>

        <div className="grid items-center gap-2 lg:grid-flow-col lg:grid-cols-7">
          <h3 className="text-heading-16 lg:col-span-1">Green</h3>
          <ul className="grid grid-cols-5 gap-2 sm:grid-cols-5 lg:col-span-6 lg:grid-cols-10">
            <ColorItem className="bg-green-100" />
            <ColorItem className="bg-green-200" />
            <ColorItem className="bg-green-300" />
            <ColorItem className="bg-green-400" />
            <ColorItem className="bg-green-500" />
            <ColorItem className="bg-green-600" />
            <ColorItem className="bg-green-700" />
            <ColorItem className="bg-green-800" />
            <ColorItem className="bg-green-900" />
            <ColorItem className="bg-green-1000" />
          </ul>
        </div>

        <div className="grid items-center gap-2 lg:grid-flow-col lg:grid-cols-7">
          <h3 className="text-heading-16 lg:col-span-1">Teal</h3>
          <ul className="grid grid-cols-5 gap-2 sm:grid-cols-5 lg:col-span-6 lg:grid-cols-10">
            <ColorItem className="bg-teal-100" />
            <ColorItem className="bg-teal-200" />
            <ColorItem className="bg-teal-300" />
            <ColorItem className="bg-teal-400" />
            <ColorItem className="bg-teal-500" />
            <ColorItem className="bg-teal-600" />
            <ColorItem className="bg-teal-700" />
            <ColorItem className="bg-teal-800" />
            <ColorItem className="bg-teal-900" />
            <ColorItem className="bg-teal-1000" />
          </ul>
        </div>

        <div className="grid items-center gap-2 lg:grid-flow-col lg:grid-cols-7">
          <h3 className="text-heading-16 lg:col-span-1">Purple</h3>
          <ul className="grid grid-cols-5 gap-2 sm:grid-cols-5 lg:col-span-6 lg:grid-cols-10">
            <ColorItem className="bg-purple-100" />
            <ColorItem className="bg-purple-200" />
            <ColorItem className="bg-purple-300" />
            <ColorItem className="bg-purple-400" />
            <ColorItem className="bg-purple-500" />
            <ColorItem className="bg-purple-600" />
            <ColorItem className="bg-purple-700" />
            <ColorItem className="bg-purple-800" />
            <ColorItem className="bg-purple-900" />
            <ColorItem className="bg-purple-1000" />
          </ul>
        </div>

        <div className="grid items-center gap-2 lg:grid-flow-col lg:grid-cols-7">
          <h3 className="text-heading-16 lg:col-span-1">Pink</h3>
          <ul className="grid grid-cols-5 gap-2 sm:grid-cols-5 lg:col-span-6 lg:grid-cols-10">
            <ColorItem className="bg-pink-100" />
            <ColorItem className="bg-pink-200" />
            <ColorItem className="bg-pink-300" />
            <ColorItem className="bg-pink-400" />
            <ColorItem className="bg-pink-500" />
            <ColorItem className="bg-pink-600" />
            <ColorItem className="bg-pink-700" />
            <ColorItem className="bg-pink-800" />
            <ColorItem className="bg-pink-900" />
            <ColorItem className="bg-pink-1000" />
          </ul>
        </div>
      </div>
    </section>
  );
}

function ColorItem({ className }: ComponentProps<"li">) {
  return (
    <li
      className={cn(
        "aspect-square rounded-xl border border-gray-400 bg-gray-100 sm:aspect-wide-horizontal md:aspect-panoramic-horizontal",
        className
      )}
    />
  );
}
