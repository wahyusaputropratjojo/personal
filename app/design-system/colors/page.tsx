import { BackgroundsSection } from "./_sections/backgrounds-section";
import { BordersSection } from "./_sections/borders-section";
import { ComponentBackgroundsSection } from "./_sections/component-backgrounds-section";
import { HighContrastBackgroundsSection } from "./_sections/high-contrast-backgrounds";
import { ScalesSection } from "./_sections/scales-section";
import { TextAndIconsSection } from "./_sections/text-and-icons-section";

export default function Page() {
  return (
    <main className="container">
      <article className="space-y-8 lg:space-y-16">
        <section>
          <h1 className="text-heading-32 lg:text-heading-48">Colors</h1>
          <p className="text-pretty text-copy-14 text-gray-900 lg:text-copy-16">
            This palette provides the necessary colors for creating clear,
            accessible, and branded experiences.
          </p>
        </section>
        <ScalesSection />
        <BackgroundsSection />
        <ComponentBackgroundsSection />
        <BordersSection />
        <HighContrastBackgroundsSection />
        <TextAndIconsSection />
      </article>
    </main>
  );
}
